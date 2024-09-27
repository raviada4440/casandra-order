import type { ChangeEvent} from "react";
import React, { useContext, useEffect, useState } from "react";

import uuid from 'react-native-uuid';

import { Grid, Typography, Checkbox } from "@mui/material";

import { LabOrderContext } from "..";

import type { LabOrderBillingWithRelations, LabOrderSponsoredTestConsentWithRelations, LabOrderTestWithRelations, LabOrderWithRelations } from "~prisma/generated/zod";
import StepEligibility from './StepEligibility';
import EligibilitySubtitle from '../subtitle/Eligibility';
import StepBillingDetails from './StepBillingDetails';
import BillingSubtitle from '../subtitle/Billing';
import '@/app/globals.css'


const HitView = (props: any) => {

  console.log('props (HitView) :', props)

  const { labOrder, setLabOrder, steps, setSteps, setActiveStep, activeStep } = useContext(LabOrderContext);

  const [selected, setSelected] = useState<readonly LabOrderTestWithRelations[]>([]);

  const [newLabOrder] = useState<LabOrderWithRelations>({...labOrder});

  const isSelected = (id: number, type: string, drugName: string, indication: string) => {
    return selected?.some(item => item.TestId === id && item.Type === type && item.DrugName === drugName && item.Indication === indication)
  }

  const isTypeSelected = (type: string): boolean => {
    return selected?.some(item => item.Type === type);
  }

  useEffect(() => {

    if (labOrder?.LabOrderTest && labOrder?.LabOrderTest.length > 0) {
      setSelected(labOrder?.LabOrderTest);
    } else {
      setSelected([])
    }

  }, [labOrder]);

  const handleClick = (event: ChangeEvent<HTMLInputElement>, testType: string, drugName: string, indication: string, hit: any) => {

    const { type, checked } = event.target;

    console.log(`Test ${type}  for TestId ${hit.TestId} is ${checked ? 'selected' : 'unselected'}`);

    event.preventDefault()

    // console.log('CollectionMethod :', hit.CollectionMethod)

    // setCollectionMethod(hit.CollectionMethod)

    console.log('hit :', hit, 'type :', testType, 'drugName :', drugName, 'indication :', indication)

    // let newLabOrder: LabOrderWithRelations = { ...labOrder }

    if (testType === 'Sponsored Tests') {
      // remove billing step
      const hasBillingInSteps = steps?.some(entry => entry.title === 'Billing')
      const hasBillingTypeInSelected = isTypeSelected('Companion Diagnostics')

      console.log('hasBillingInSteps :', hasBillingInSteps, 'hasBillingTypeInSelected :', hasBillingTypeInSelected)

      // if billing step is in steps and the selected tests do not contain a billing type, remove the billing step
      if (hasBillingInSteps && !hasBillingTypeInSelected) {
        const index = steps?.findIndex(entry => entry.title === 'Billing');

        if (index > -1) {
          steps?.splice(index, 1);
          setSteps(steps);
        }
      }

      // add eligibility step
      const hasEligibility = steps?.some(entry => entry.title === 'Eligibility')

      // Generate the LabOrderTest
      const labOrderEligibilityConsent = [{
        Id: uuid.v4() as string,

        // LabOrderId: labOrder.Id,
        SponsoredCasandraTestId: hit.CasandraTestId,
        ProviderName: '',
        ProviderNPI: '',
        ConsentAt: new Date(),
        SponsoredTest: [{
          SponsoredProgram: {
            ProgramEligibility: hit.ProgramEligibility
          }
        }]
      }] as unknown as LabOrderSponsoredTestConsentWithRelations[];

      newLabOrder.LabOrderSponsoredTestConsent = labOrderEligibilityConsent

      if(!hasBillingTypeInSelected) {
        newLabOrder.LabOrderBilling = []
      }

      console.log('labOrderCopy LabOrderSponsoredTestConsent:', newLabOrder)

      // // Only update the state if labOrderCopy has changed
      // if (JSON.stringify(newLabOrder) !== JSON.stringify(labOrder)) {
      //   console.log('newLabOrder is different from labOrder, updating labOrder with LabOrderSponsoredTestConsent: ', newLabOrder);
      //   setLabOrder(newLabOrder);
      // }

      if (!hasEligibility) {
        const eligibilityStep = {
          title: 'Eligibility',
          subtitle: 'Eligibility',
          stepDetails: StepEligibility,
          subTitleDetails: EligibilitySubtitle
        }

        // Find the index of the step with the title 'Tests'
        const testsIndex = steps.findIndex(step => step.title === 'Tests');

        // Insert eligibilityStep after the step with the title 'Tests'
        if (testsIndex !== -1) {
          steps.splice(testsIndex + 1, 0, eligibilityStep);
        }

        // steps?.push(eligibilityStep);
        // moveToTop('Eligibility');

        // moveToTop('Tests');
        setSteps(steps);
        setActiveStep(activeStep);
      }
    } else if (testType === 'Companion Diagnostics') {

      // remove eligibility step
      const hasEligibilityInSteps = steps?.some(entry => entry.title === 'Eligibility')
      const hasEligibilityInSelected = isTypeSelected('Sponsored Tests')

      console.log('hasEligibilityInSteps :', hasEligibilityInSteps, 'hasBillingTypeInSelected :', hasEligibilityInSelected)

      // if eligibility step is in steps and the selected tests do not contain a sponsored test type, remove the eligibility step
      if (hasEligibilityInSteps && !hasEligibilityInSelected) {
        const index = steps?.findIndex(entry => entry.title === 'Eligibility');

        if (index > -1) {
          steps?.splice(index, 1);
          setSteps(steps);
        }
      }

      // add billing step
      const hasBilling = steps?.some(entry => entry.title === 'Billing')

      const labOrderBilling = [{
        Id: uuid.v4() as string,

        // LabOrderId: labOrder.Id,
        BillToId: '',
        HealthPlanId: '',
        PatientStatus: '',
        SubscriberId: '',
        SponoseredTestCouponCode: '',
      }] as unknown as LabOrderBillingWithRelations[];

      newLabOrder.LabOrderBilling = labOrderBilling

      if(!hasEligibilityInSelected) {
        newLabOrder.LabOrderSponsoredTestConsent = []
      }

      if (!hasBilling) {
        const eligibilityStep = {
          title: 'Billing',
          subtitle: 'Billing',
          stepDetails: StepBillingDetails,
          subTitleDetails: BillingSubtitle
        }

        steps?.push(eligibilityStep);

        // moveToTop('Tests');
        setSteps(steps);
        setActiveStep(activeStep);
      }
    } else {
      console.log('No type')
    }


    const labOrderTest = {
      Id: uuid.v4() as string,
      Type: testType,
      TestId: hit.TestId,
      DrugName: drugName,
      Indication: indication,
      TestCatalog: {
        TestId: hit.TestId,
        TestName: hit.TestName,
        LabTestId: hit.LabTestId,
        CasandraTestId: hit.CasandraTestId,
      }
    } as unknown as LabOrderTestWithRelations

    const selectedIndex = selected.findIndex(item => item.TestId === hit.TestId)
    let newSelected: readonly LabOrderTestWithRelations[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, labOrderTest);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);

    // console.log(selected)

    // const labOrderCopy = { ...labOrder }

    newLabOrder.LabOrderTest = newSelected as LabOrderTestWithRelations[]

    setLabOrder(newLabOrder)

    // setSelectedTestId(hit.TestId)
  }

  return (
    <div className="hit-view-container">

    <Grid container alignItems="center">
      {props.hit.LabTests.length > 1 ? (
        <Grid item className='ml-3'>
          <Typography variant='h6' className='text-primary'>
            {props.hit.GroupName} {props.hit.DrugName && props.hit.DrugName.length > 0 && (<b> for {props.hit.DrugName}</b>)}
          </Typography>
          <Grid container direction="column" spacing={1} style={{ marginBottom: '15px' }}>
            {props.hit.LabTests.map((test: any) => (
              <React.Fragment key={uuid.v4() as string}>
              <Grid item xs id={`${props.hit.GroupName-test.TestId}`} style={{ marginBottom: '-15px' }}>
                <span className='text-textSecondary' style={{ display: 'flex', alignItems: 'center' }}>
                  <Checkbox id={`${props.hit.GroupName-test.TestId}`} size="small" checked={isSelected(test.TestId, props.hit.Type, props.hit.DrugName, props.hit.Indication)} onChange={(event) => handleClick(event, props.hit.Type, props.hit.DrugName, props.hit.Indication, test)} />
                  <Typography variant='body2' className='text-textSecondary'>
                    {test.LabName} ( {test.TurnAroundTime} )
                  </Typography>
                </span>
              </Grid>
              </React.Fragment>
            )) }
          </Grid>
        </Grid>
      ) : (
        <React.Fragment key={uuid.v4() as string}>
        <Grid item>
          <Checkbox size="small" checked={isSelected(props.hit.LabTests[0].TestId, props.hit.Type, props.hit.DrugName, props.hit.Indication)} onChange={(event) => handleClick(event, props.hit.Type, props.hit.DrugName, props.hit.Indication, props.hit.LabTests[0])} />
        </Grid>
        <Grid item>
          <Typography variant='h6' className='text-primary'>
            {props.hit.GroupName} {props.hit.DrugName && props.hit.DrugName.length > 0 && (<b> for {props.hit.DrugName}</b>)}
          </Typography>
          <Typography variant='body2' className='text-textSecondary'>
          {props.hit.LabTests[0].LabName} ( {props.hit.LabTests[0].TurnAroundTime} )
          </Typography>
        </Grid>
        </React.Fragment>
      )}
    </Grid>
    </div>
  )

}

export default HitView

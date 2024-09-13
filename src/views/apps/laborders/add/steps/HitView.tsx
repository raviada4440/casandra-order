import type { ChangeEvent} from "react";
import { useContext, useEffect, useState } from "react";

import uuid from 'react-native-uuid';
import { Grid, Typography, Checkbox } from "@mui/material";

import { LabOrderContext } from "..";

import type { LabOrderSponsoredTestConsentWithRelations, LabOrderTestWithRelations } from "~prisma/generated/zod";
import StepEligibility from './StepEligibility';
import Eligibility from '../subtitle/Eligibility';
import StepBillingDetails from './StepBillingDetails';
import BillingSubtitle from '../subtitle/Billing';
import '@/app/globals.css'


const HitView = (props: any) => {

  console.log('props :', props)

  const { labOrder, setLabOrder, moveToTop, steps, setSteps, setActiveStep, activeStep } = useContext(LabOrderContext);

  const [selected, setSelected] = useState<readonly LabOrderTestWithRelations[]>([]);

  const isSelected = (id: number, type: string) => selected?.some(item => item.TestId === id && item.Type === type);

  useEffect(() => {

    console.log('labOrder?.LabOrderTest ', labOrder?.LabOrderTest)

    if (labOrder?.LabOrderTest && labOrder?.LabOrderTest.length > 0) {
      setSelected(labOrder?.LabOrderTest);
    } else {
      setSelected([])
    }

  }, [labOrder]);

  const handleClick = (event: ChangeEvent<unknown>, type: string, hit: any) => {
    event.preventDefault()

    // console.log('CollectionMethod :', hit.CollectionMethod)

    // setCollectionMethod(hit.CollectionMethod)

    console.log('hit :', hit, 'type :', type)

    if (type === 'Sponsored Tests') {
      // remove billing step
      const hasBilling = steps?.some(entry => entry.title === 'Billing')

      if (hasBilling) {
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
        TestId: hit.TestId,
        SponsoredTest: [{
          SponsoredProgram: {
            ProgramEligibility: hit.ProgramEligibility
          }
        }]
      }] as unknown as LabOrderSponsoredTestConsentWithRelations[];

      const labOrderCopy = { ...labOrder, LabOrderSponsoredTestConsent: labOrderEligibilityConsent };

      // Only update the state if labOrderCopy has changed
      if (JSON.stringify(labOrderCopy) !== JSON.stringify(labOrder)) {
        // console.log('LabOrderCopy: ', labOrderCopy);
        setLabOrder(labOrderCopy);
      }

      if (!hasEligibility) {
        const eligibilityStep = {
          title: 'Eligibility',
          subtitle: 'Eligibility',
          stepDetails: StepEligibility,
          subTitleDetails: Eligibility
        }

        steps?.push(eligibilityStep);
        moveToTop('Eligibility');

        // moveToTop('Tests');
        setSteps(steps);
        setActiveStep(activeStep+1);
      }
    } else if (type === 'Companion Diagnostics') {

      // remove eligibility step
      const hasEligibility = steps?.some(entry => entry.title === 'Eligibility')

      if (hasEligibility) {
        const index = steps?.findIndex(entry => entry.title === 'Eligibility');

        if (index > -1) {
          steps?.splice(index, 1);
          setSteps(steps);
        }
      }

      // add billing step
      const hasBilling = steps?.some(entry => entry.title === 'Billing')

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
        setActiveStep(activeStep+1);
      }
    } else {
      console.log('No type')
    }


    const labOrderTest = {
      Id: uuid.v4() as string,
      Type: type,
      TestId: hit.TestId,
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

    const labOrderCopy = { ...labOrder }

    labOrderCopy.LabOrderTest = newSelected as LabOrderTestWithRelations[]

    setLabOrder(labOrderCopy)

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
              <>
              <Grid item xs id={`${props.hit.GroupName-test.TestId}`} style={{ marginBottom: '-15px' }}>
                <span className='text-textSecondary' style={{ display: 'flex', alignItems: 'center' }}>
                  <Checkbox id={`${props.hit.GroupName-test.TestId}`} size="small" checked={isSelected(test.TestId, props.hit.Type)} onChange={(event) => handleClick(event, props.hit.Type, test)} />
                  <Typography variant='body2' className='text-textSecondary'>
                    {test.LabName} ( {test.TurnAroundTime} )
                  </Typography>
                </span>
              </Grid>
              </>
            )) }
          </Grid>
        </Grid>
      ) : (
        <>
        <Grid item>
          <Checkbox size="small" checked={isSelected(props.hit.LabTests[0].TestId, props.hit.Type)} onChange={(event) => handleClick(event, props.hit.Type, props.hit.LabTests[0])} />
        </Grid>
        <Grid item>
          <Typography variant='h6' className='text-primary'>
            {props.hit.GroupName} {props.hit.DrugName && props.hit.DrugName.length > 0 && (<b> for {props.hit.DrugName}</b>)}
          </Typography>
          <Typography variant='body2' className='text-textSecondary'>
          {props.hit.LabTests[0].LabName} ( {props.hit.LabTests[0].TurnAroundTime} )
          </Typography>
        </Grid>
        </>
      )}
    </Grid>
    </div>
  )

}

export default HitView

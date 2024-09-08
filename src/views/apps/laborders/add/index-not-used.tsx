'use client'

import type { Dispatch, SetStateAction} from 'react';
import { createContext, useEffect, useState } from 'react';

import { useLocation } from 'react-use';

import AddLabOrderSponsored from './index-sponsored';
import AddLabOrderCdx from '.';
import AddLabOrderEhr from './index-ehr';
import AddLabOrderStandalone from './index-standalone';

import type { LabOrderWithRelations } from '~prisma/generated/zod';


type LabOrderContextType = {
  labOrder: LabOrderWithRelations,
  setLabOrder: Dispatch<SetStateAction<LabOrderWithRelations>>
  collectionMethod: string,
  setCollectionMethod: Dispatch<SetStateAction<string>>
};

export const LabOrderContext = createContext<LabOrderContextType>({} as LabOrderContextType)

const AddLabOrder = () => {
  const [tcQuery, setTcQuery] = useState<string>('')
  const [source, setSource] = useState<string>('')


  // Get the current location
  const location = useLocation();

  useEffect(() => {
    // Parse the query parameters
    const queryParams = new URLSearchParams(location.search);

    // console.log('queryParams', queryParams.toString())

    const redirectTo = queryParams.get('redirectTo') as string;
    const url = new URL(redirectTo, location.href)

    const qParams = new URLSearchParams(url.search);

    // Get a specific query parameter
    const testCatalogQuery = qParams.get('testcatalog[query]') as string;
    const sourceQuery = qParams.get('source') as string;

    console.log('testCatalogQuery', testCatalogQuery)
    console.log('sourceQuery', sourceQuery)

    setTcQuery(testCatalogQuery)
    setSource(sourceQuery)

  }, [location])

  return (
    <>
    {source && source === 'sponsored' && (<AddLabOrderSponsored tcQuery={tcQuery} /> )}
    {/* {source && source === 'cdx' && (<AddLabOrderCdx tcQuery={tcQuery} /> )} */}
    {source && source === 'ehr' && (<AddLabOrderEhr /> )}
    {source && source === 'standalone' && (<AddLabOrderStandalone /> )}

    </>
  )
}

export default AddLabOrder

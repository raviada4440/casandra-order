// React Imports
import { redirect } from 'next/navigation'

// Component Imports
import TestDetails from '@/views/pages/test-details'
import { api } from '~trpc/server'

// const getTestData = async (id: string) => {
//   // Vars
//   const testData = await api.testcatalog.getTest.query({ testId: id })

//   if (!testData) {
//     throw new Error('Failed to fetch test data')
//   }

//   return testData
// }

// eslint-disable-next-line @next/next/no-async-client-component
const TestDetailsPage = async ({ params }: { params: { id: string } }) => {

  // Vars
  const { id } = params;

  // const testData = await getTestData(id)
  const testData = await api.testcatalog.getTest.query({ testId: id })
  const labsData = await api.testcatalog.getLabs.query(undefined)

  if (!testData) {
    redirect('/not-found')
  }

  return testData ? <TestDetails testData={testData} labsData={labsData} /> : null

}

export default TestDetailsPage

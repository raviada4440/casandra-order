'use client'

// MUI Imports
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import IconButton from '@mui/material/IconButton'
import { DialogActions } from '@mui/material'

// import { Viewer, Worker } from '@react-pdf-viewer/core';
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';


// Styled Component Imports
import type { CustomLabOrderType } from '@/server/api/routers/laborder'

type ResultProps = {
  open: boolean
  setOpen: (open: boolean) => void
  labOrderRecord: CustomLabOrderType
}

const DisplayLabResults = ({ open, setOpen, labOrderRecord }: ResultProps) => {

  console.log('labOrderRecord: ', labOrderRecord)

  // const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <Dialog fullWidth maxWidth='md' scroll='body' open={open} onClose={() => setOpen(false)}>
      <DialogTitle
        variant='h4'
        className='flex gap-2 flex-col text-center pbs-10 pbe-6 pli-10 sm:pbs-16 sm:pbe-6 sm:pli-16'
      >
        Lab Results
      </DialogTitle>
      <DialogContent className='flex flex-col gap-6 pbs-0 pbe-10 pli-10 sm:pli-16 sm:pbe-16'>
        <IconButton onClick={() => setOpen(false)} className='absolute block-start-4 inline-end-4'>
          <i className='ri-close-line' />
        </IconButton>
          <div className='flex flex-col gap-2 mt-4'>
            <Grid container spacing={5}>
              <Grid item xs={12}>
              {/* <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.js">
                <div style={{ height: "750px" }}>
                  <Viewer
                    fileUrl={labOrderRecord?.ResultPdfUrl || ''}
                    plugins={[defaultLayoutPluginInstance]}
                  />
                </div>
              </Worker> */}
              <div
                style={{
                    height: '900px',
                    width: '100%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}
              >
                <object data={labOrderRecord?.ResultPdfUrl || ''} type="application/pdf" width="100%" height="100%">
                    <p>Unable to display PDF file. <a href="sample.pdf">Download</a> instead.</p>
                </object>
              </div>
              </Grid>
            </Grid>
          </div>

        <DialogActions className='gap-2 justify-center pbs-0 pbe-10 pli-10 sm:pbe-16 sm:pli-16'>
          <Button
            variant='outlined'
            color='secondary'
            onClick={() => {
              setOpen(false)
            }}
            type='button'
          >
            Close
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  )
}

export default DisplayLabResults

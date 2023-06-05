import { Modal, useMantineTheme } from '@mantine/core';

function ProfileModal({modalOpened , setModalOpened}) {
  const theme = useMantineTheme();

  return (
    <>
      <Modal
        opened={modalOpened}
        onClose={()=>setModalOpened(false)}
        size = '55%'
        overlayProps={{
          color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2],
          opacity: 0.55,
          blur: 3,
        }
    }
      >
        <form className='infoForm'>
            <h3>Your info</h3>

            <div>
                <input type='text' className='infoInput' name='FirstName' placeholder='First Name' />
                <input type='text' className='infoInput' name='LastName' placeholder='Last Name' />
            </div>
            <div>
                <input type='text' className='infoInput' name='worksAt' placeholder='Works at' />
                <input type='text' className='infoInput' name='livesIN' placeholder='Lives in' />
            </div>
            <div>
                <input type='text' className='infoInput' name='Country' placeholder='Country' />
                <input type='text' className='infoInput'  placeholder='Relationship Status' />
            </div>  
            <div>
                Profile Image
                <input type='file' name='profileImg'  />
                Cover Image
                <input type='file' name='coverImg' />

            </div>  
            
            <button className='button'>Update</button>
        
        </form>
      </Modal>

      {/* <Group position="center">
        <Button onClick={open}>Open modal</Button>
      </Group> */}
    </>
  );
}

export default ProfileModal;
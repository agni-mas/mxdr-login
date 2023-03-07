import React, { useState, KeyboardEvent, MouseEvent, Fragment } from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import './SideModal.css'

export default function SideModal({ state, toggleDrawer, data }) {

    const ModalContent = () => (
        <aside className='modal'>
            <div className='modal-top'>
                <span className='modtal-top--details-btn'>View Details</span>
                <div className='modal-top-section'>
                    <div>
                        <span className='modtal-top--incident-id'>{data[state?.index]?.id}</span>
                        <div className='modal-top__type'>
                            <h4>{data[state?.index]?.severity}</h4>
                            <Button variant='text' sx={{ color: 'white', textUnderlineOffset: '3px', textDecoration: '1px solid white underline' }}>Change</Button>
                        </div>
                    </div>
                    <Button variant='contained' sx={{ height: 'min-content', alignSelf: 'self-end' }}>Add comments</Button>
                </div>
            </div>

            <div className='modal-section-2'>
                <div className='modal-section-2__box-1'>
                    <h5 className='modal-sectino-2--title'>CSS Experience</h5>
                    <div className='modal-section-2__buttons'>
                        <Button variant='text' sx={{ color: 'white', textUnderlineOffset: '3px', textDecoration: '1px solid white underline', p: 0 }}>Reassign</Button>
                        <Button variant='text' sx={{ color: 'white', textUnderlineOffset: '3px', textDecoration: '1px solid white underline', p: 0 }}>Assign to me</Button>
                    </div>
                </div>
                <div className='modal-section-2__box-2'>
                    <h5 className='modal-sectino-2--title'>New</h5>
                    <div className='modal-section-2__buttons'>
                        <Button variant='text' sx={{ color: 'white', textUnderlineOffset: '3px', textDecoration: '1px solid white underline', p: 0 }}>Change</Button>
                    </div>
                </div>
            </div>

            <div className='modal-section-3'>
                <div className='meta-data'>
                    <h4 className='meta-data--title'>Category</h4>
                    <p className='meta-data--description'>Lorem Ipsum</p>
                </div>
                <div className='meta-data'>
                    <h4 className='meta-data--title'>Classification</h4>
                    <p className='meta-data--description'>Lorem Ipsum</p>
                </div>
                <div className='meta-data'>
                    <h4 className='meta-data--title'>Created</h4>
                    <p className='meta-data--description'>Lorem Ipsum</p>
                </div>
                <div className='meta-data'>
                    <h4 className='meta-data--title'>Source IP</h4>
                    <p className='meta-data--description'>Lorem Ipsum</p>
                </div>
                <div className='meta-data'>
                    <h4 className='meta-data--title'>Source Organization</h4>
                    <p className='meta-data--description'>Lorem Ipsum</p>
                </div>
                <div className='meta-data'>
                    <h4 className='meta-data--title'>Destination Organizatino</h4>
                    <p className='meta-data--description'>Lorem Ipsum</p>
                </div>
            </div>

            <div className='modal-section-4'>
                <h3>Description</h3>
                <p className='modal-section-4__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nulla, repellat ullam corrupti placeat rem officia optio amet, beatae, magni eaque laudantium. Cupiditate mollitia deleniti laborum suscipit eum accusantium dicta?</p>
                <p className='modal-section-4__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nulla, repellat ullam corrupti placeat rem officia optio amet, beatae, magni eaque laudantium. Cupiditate mollitia deleniti laborum suscipit eum accusantium dicta?</p>
            </div>
        </aside>
    )

    return (
        <>
            <Drawer
                anchor='right'
                open={state['right']}
                onClose={toggleDrawer('right', false)}>
                <ModalContent />
            </Drawer>
        </>
    );
}

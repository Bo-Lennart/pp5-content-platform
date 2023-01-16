import { Dropdown } from 'react-bootstrap';
import styles from '../styles/MoreDropdown.module.css'
import React from 'react';

const ThreeDots = React.forwardRef(({ onClick }, ref) => (
    <i
        className="fas fa-ellipsis-v"
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
    />
));

export const MoreDropdown = () => {
    return (
        <Dropdown className='text-end'>
            <Dropdown.Toggle as={ThreeDots} />


            <Dropdown.Menu className='text-center'>
                <Dropdown.Item eventKey="1">Red</Dropdown.Item>
                <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
                <Dropdown.Item eventKey="3" active>
                    Orange
                </Dropdown.Item>
                <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        )
}
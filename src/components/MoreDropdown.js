import { Button, Dropdown } from 'react-bootstrap';
import styles from '../styles/MoreDropdown.module.css'
import React from 'react';

const ThreeDots = React.forwardRef(({ onClick }, ref) => (
    <div  className={styles.DotMenu}><i
        className="fa-solid fa-pencil"
        ref={ref}
        type="button"
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
    /></div>
));

export const MoreDropdown = ({ handleEdit, handleDelete }) => {
    return (
        <Dropdown className='text-end'>
            <Dropdown.Toggle as={ThreeDots} />

            <Dropdown.Menu className='text-center'>
                <Dropdown.Item className={styles.DropdownItem}
                    onClick={handleEdit}
                    aria-label="edit">
                    <i className='fas fa-edit' />
                </Dropdown.Item>
                <Dropdown.Item className={styles.DropdownItem}
                    onClick={handleDelete}
                    aria-label="delete">
                    <i className='fas fa-trash-alt' />
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}
import { Dropdown } from 'react-bootstrap';
import styles from '../styles/MoreDropdown.module.css'
import React from 'react';

const EditProfile = React.forwardRef(({ onClick }, ref) => (
    <i
        className="fa-solid fa-user-pen"
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
    />
));

export const EditProfileDropdown = ({ handleEdit, changePassword }) => {
    return (
        <Dropdown className='text-end'>
            <Dropdown.Toggle as={EditProfile} />

            <Dropdown.Menu className='text-center'>
                <Dropdown.Item className={styles.DropdownItem}
                    onClick={handleEdit}
                    aria-label="Change Profile Image">
                    <i class="fa-regular fa-image"></i>
                </Dropdown.Item>
                <Dropdown.Item className={styles.DropdownItem}
                    onClick={changePassword}
                    aria-label="Change Password">
                    <i class="fa-solid fa-user-lock" />
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}
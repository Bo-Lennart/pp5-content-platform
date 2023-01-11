import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import axios from 'axios';

import { Form, Button, Image, Col, Row, Container, Alert, } from "react-bootstrap";
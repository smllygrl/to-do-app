import React from "react";

import { render, screen } from "@testing-library/react";

// last 4 digits of password should be * when length >= 5
// can't contain ~ ` < >
// length must be between 5 and 12

// ONLY THROW REAL ERRORS ON SUBMIT
// otherwise, just display information on page

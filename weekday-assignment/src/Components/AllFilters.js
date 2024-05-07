import React, { useState } from 'react';
import { Grid, TextField, Select, MenuItem, Chip, FormControlLabel, Checkbox } from '@mui/material';

const AllFilters = ({ onFilter }) => {
    const [filters, setFilters] = useState({
        minExperience: "",
        companyName: "",
        location: "",
        remote: false,
        jobRole: [],
        minBasePay: "",
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === "checkbox" ? checked : value;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: newValue,
        }));

        // Apply filters immediately as the user types
        onFilter({
            ...filters,
            [name]: newValue,
        });
    };

    const handleRoleChange = (selectedRoles) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            jobRole: selectedRoles,
        }));

        // Apply filters immediately as the user selects roles
        onFilter({
            ...filters,
            jobRole: selectedRoles,
        });
    };

    const handleRoleDelete = (roleToDelete) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            jobRole: prevFilters.jobRole.filter((role) => role !== roleToDelete),
        }));

        // Apply filters immediately as the user deletes a role
        onFilter({
            ...filters,
            jobRole: filters.jobRole.filter((role) => role !== roleToDelete),
        });
    };

    return (
        <div className="filter">
            <form>
                <Grid container spacing={2} justifyContent='center' sx={{marginBottom:2}}>
                    <Grid item xs={12} sm={2}>
                        <TextField
                            type="text"
                            name="companyName"
                            label="Company Name"
                            placeholder="Company Name"
                            value={filters.companyName}
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12} sm={2}>
                       
                        <Select
                            name="jobRole"
                            label="Roles"
                            placeholder='Roles'
                            value={filters.jobRole}
                            onChange={(e) => handleRoleChange(e.target.value)}
                            multiple
                            displayEmpty 
                            fullWidth
                            renderValue={(selected) => (
                                <div>
                                    {selected.map((role) => (
                                        <Chip
                                            key={role}
                                            label={role}
                                            onDelete={() => handleRoleDelete(role)}
                                            style={{ marginRight: 5, marginBottom: 5 }}
                                        />
                                    ))}
                                </div>
                            )}
                            inputProps={{ 
                                placeholder: 'Select Role', 
                            }}
                        >
                            <MenuItem disabled value="">
                                <em>Select Role</em> 
                            </MenuItem>
                            {[
                                "Frontend",
                                "Backend",
                                "Full Stack",
                                "DevOps",
                                "UI Designer",
                                "Operations",
                                "HR",
                            ].map((role) => (
                                <MenuItem key={role} value={role}>
                                    {role}
                                </MenuItem>
                            ))}
                        </Select>

                    </Grid>

                    <Grid item xs={12} sm={2}>
                        <TextField
                            type="text"
                            name="location"
                            label="Location"
                            placeholder="Location"
                            value={filters.location}
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12} sm={2}>
                        <TextField
                            type="text"
                            name="minExperience"
                            label="Min Experience"
                            placeholder="Select Min Experience"
                            value={filters.minExperience}
                            onChange={handleChange}
                            select
                            variant="outlined"
                            fullWidth
                        >
                            <MenuItem value="">Select Min Experience</MenuItem>
                            {[1, 2, 3, 4, 5, 6, 7].map((exp) => (
                                <MenuItem key={exp} value={exp}>{exp} Year{exp > 1 && 's'}</MenuItem>
                            ))}
                        </TextField>
                    </Grid>

                    <Grid item xs={12} sm={2}>
                        <TextField
                            type="text"
                            name="minBasePay"
                            label="Min Base Pay"
                            placeholder="Select Min Base Pay"
                            value={filters.minBasePay}
                            onChange={handleChange}
                            select
                            variant="outlined"
                            fullWidth
                        >
                            <MenuItem value="">Select Min Base Pay</MenuItem>
                            {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((pay) => (
                                <MenuItem key={pay} value={pay}>{pay}L</MenuItem>
                            ))}
                        </TextField>
                    </Grid>

                    <Grid item xs={12} sm={2} >
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="remote"
                                    checked={filters.remote}
                                    onChange={handleChange}
                                    color="warning"
                                />
                            }
                            label="Remote"
                        />
                    </Grid>
                </Grid>
            </form>
        </div>
    );
}

export default AllFilters;

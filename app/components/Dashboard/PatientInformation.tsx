"use client";

import React, { useContext } from "react";
import { DashboardContext } from "../../contexts/DashboardContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const PatientInformation: React.FC = () => {
  const context = useContext(DashboardContext);

  if (!context) return null;

  const { patientInfo, handlePatientInfoChange, setPatientInfo } = context;

  return (
    <Card className="col-span-1 md:col-span-2">
      <CardHeader>
        <CardTitle>Patient Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="grid grid-cols-2 gap-2">
          <div>
            <Label htmlFor="subject_id">Subject ID</Label>
            <Input
              id="subject_id"
              placeholder="Enter Subject ID"
              value={patientInfo.subject_id}
              onChange={handlePatientInfoChange}
            />
          </div>
          <div>
            <Label htmlFor="gender">Gender</Label>
            <Select
              value={patientInfo.gender}
              onValueChange={(value) =>
                setPatientInfo((prev) => ({ ...prev, gender: value }))
              }
            >
              <SelectTrigger id="gender">
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <Label htmlFor="anchor_year">Anchor Year</Label>
            <Input
              id="anchor_year"
              type="number"
              value={patientInfo.anchor_year}
              onChange={handlePatientInfoChange}
            />
          </div>
          <div>
            <Label htmlFor="anchor_age">Anchor Age</Label>
            <Input
              id="anchor_age"
              type="number"
              value={patientInfo.anchor_age}
              onChange={handlePatientInfoChange}
            />
          </div>
        </div>
        <div>
          <Label htmlFor="insurance_type">Insurance Type</Label>
          <Select
            value={patientInfo.insurance_type}
            onValueChange={(value) =>
              setPatientInfo((prev) => ({ ...prev, insurance_type: value }))
            }
          >
            <SelectTrigger id="insurance_type">
              <SelectValue placeholder="Select insurance type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="private">Private</SelectItem>
              <SelectItem value="medicare">Medicare</SelectItem>
              <SelectItem value="medicaid">Medicaid</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="hospital_stay_count">Hospital Stay Count</Label>
          <Input
            id="hospital_stay_count"
            type="number"
            value={patientInfo.hospital_stay_count}
            onChange={handlePatientInfoChange}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default PatientInformation;

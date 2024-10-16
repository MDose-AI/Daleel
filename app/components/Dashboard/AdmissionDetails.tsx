// src/components/Dashboard/AdmissionDetails.tsx
"use client";

import React, { useContext } from "react";
import { DashboardContext } from "../../contexts/DashboardContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { PlusCircle, X } from "lucide-react";

const AdmissionDetails: React.FC = () => {
  const context = useContext(DashboardContext);

  if (!context) return null;

  const {
    admissions,
    currentAdmission,
    handleAdmissionChange,
    handleAddAdmission,
    handleDeleteAdmission,
  } = context;

  return (
    <Card className="col-span-1 md:col-span-2">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Admission Details</CardTitle>
        <Button variant="ghost" size="icon" onClick={handleAddAdmission}>
          <PlusCircle className="h-5 w-5" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-2">
        <div>
          <Label htmlFor="hadm_id">Admission ID</Label>
          <Input
            id="hadm_id"
            placeholder="Enter Admission ID"
            value={currentAdmission.hadm_id}
            onChange={handleAdmissionChange}
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <Label htmlFor="admit_time">Admit Time</Label>
            <Input
              id="admit_time"
              type="datetime-local"
              value={currentAdmission.admit_time}
              onChange={handleAdmissionChange}
            />
          </div>
          <div>
            <Label htmlFor="discharge_time">Discharge Time</Label>
            <Input
              id="discharge_time"
              type="datetime-local"
              value={currentAdmission.discharge_time}
              onChange={handleAdmissionChange}
            />
          </div>
        </div>
        <div>
          <Label htmlFor="hospital_service">Hospital Service</Label>
          <Input
            id="hospital_service"
            placeholder="Enter Hospital Service"
            value={currentAdmission.hospital_service}
            onChange={handleAdmissionChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            className="mt-2"
            onClick={handleAddAdmission}
          >
            Save Record
          </Button>
          <div className="space-x-2">
            {admissions.map((admission, index) => (
              <div key={index} className="flex items-center">
                <Button variant="link">{admission.hadm_id}</Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleDeleteAdmission(index)}
                >
                  <X className="h-4 w-4 text-red-500" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdmissionDetails;

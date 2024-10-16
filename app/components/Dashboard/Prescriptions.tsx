// src/components/Dashboard/Prescriptions.tsx
"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Prescriptions: React.FC = () => {
  return (
    <Card className="col-span-1 md:col-span-2">
      <CardHeader>
        <CardTitle>Prescriptions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div>
          <Label htmlFor="prescription_id">Prescription ID</Label>
          <Input id="prescription_id" placeholder="Enter Prescription ID" />
        </div>
        <div>
          <Label htmlFor="drug_name">Drug Name</Label>
          <Input id="drug_name" placeholder="Enter Drug Name" />
        </div>
        <div>
          <Label htmlFor="dose">Dose</Label>
          <Input id="dose" placeholder="Enter Dose" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <Label htmlFor="start_time">Start Time</Label>
            <Input id="start_time" type="datetime-local" />
          </div>
          <div>
            <Label htmlFor="end_time">End Time</Label>
            <Input id="end_time" type="datetime-local" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Prescriptions;

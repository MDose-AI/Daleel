// src/components/Dashboard/MedicationsAdministered.tsx
"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const MedicationsAdministered: React.FC = () => {
  return (
    <Card className="col-span-1 md:col-span-2 lg:col-span-1">
      <CardHeader>
        <CardTitle>Medications Administered (eMAR)</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="emar_id">eMAR ID</Label>
          <Input id="emar_id" placeholder="Enter eMAR ID" />
        </div>
        <div>
          <Label htmlFor="emar_drug_name">Drug Name</Label>
          <Input id="emar_drug_name" placeholder="Enter Drug Name" />
        </div>
        <div>
          <Label htmlFor="emar_dose">Dose</Label>
          <Input id="emar_dose" placeholder="Enter Dose" />
        </div>
        <div>
          <Label htmlFor="admin_time">Administration Time</Label>
          <Input id="admin_time" type="datetime-local" />
        </div>
      </CardContent>
    </Card>
  );
};

export default MedicationsAdministered;

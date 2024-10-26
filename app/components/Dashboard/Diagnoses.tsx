"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Diagnoses: React.FC = () => {
  return (
    <Card className="col-span-1 md:col-span-2">
      <CardHeader>
        <CardTitle>Diagnoses</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div>
          <Label htmlFor="diagnosis_id">Diagnosis ID</Label>
          <Input id="diagnosis_id" placeholder="Enter Diagnosis ID" />
        </div>
        <div>
          <Label htmlFor="icd_code">ICD Code</Label>
          <Input id="icd_code" placeholder="Enter ICD Code" />
        </div>
        <div>
          <Label htmlFor="icd_version">ICD Version</Label>
          <Input id="icd_version" placeholder="Enter ICD Version" />
        </div>
        <div>
          <Label htmlFor="diagnosis_description">Description</Label>
          <Textarea
            id="diagnosis_description"
            placeholder="Enter Diagnosis Description"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default Diagnoses;

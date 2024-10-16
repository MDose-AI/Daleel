// src/components/Dashboard/RadiologyReports.tsx
"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const RadiologyReports: React.FC = () => {
  return (
    <Card className="col-span-1 md:col-span-2">
      <CardHeader>
        <CardTitle>Radiology Reports</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div>
          <Label htmlFor="report_id">Report ID</Label>
          <Input id="report_id" placeholder="Enter Report ID" />
        </div>
        <div>
          <Label htmlFor="image_type">Image Type</Label>
          <Input id="image_type" placeholder="Enter Image Type" />
        </div>
        <div>
          <Label htmlFor="findings">Findings</Label>
          <Textarea id="findings" placeholder="Enter Findings" />
        </div>
        <div>
          <Label htmlFor="impression">Impression</Label>
          <Textarea id="impression" placeholder="Enter Impression" />
        </div>
        <div>
          <Label htmlFor="report_time">Report Time</Label>
          <Input id="report_time" type="datetime-local" />
        </div>
      </CardContent>
    </Card>
  );
};

export default RadiologyReports;

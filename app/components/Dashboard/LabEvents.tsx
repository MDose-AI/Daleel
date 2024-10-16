// src/components/Dashboard/LabEvents.tsx
"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LabEvents: React.FC = () => {
  return (
    <Card className="col-span-1 md:col-span-2">
      <CardHeader>
        <CardTitle>Lab Events</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div>
          <Label htmlFor="labevent_id">Lab Event ID</Label>
          <Input id="labevent_id" placeholder="Enter Lab Event ID" />
        </div>
        <div>
          <Label htmlFor="specimen_type">Specimen Type</Label>
          <Input id="specimen_type" placeholder="Enter Specimen Type" />
        </div>
        <div>
          <Label htmlFor="test_name">Test Name</Label>
          <Input id="test_name" placeholder="Enter Test Name" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <Label htmlFor="value">Value</Label>
            <Input id="value" placeholder="Enter Value" />
          </div>
          <div>
            <Label htmlFor="unit">Unit</Label>
            <Input id="unit" placeholder="Enter Unit" />
          </div>
        </div>
        <div>
          <Label htmlFor="test_time">Test Time</Label>
          <Input id="test_time" type="datetime-local" />
        </div>
      </CardContent>
    </Card>
  );
};

export default LabEvents;

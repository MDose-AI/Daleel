// src/components/Dashboard/MicrobiologyEvents.tsx
"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const MicrobiologyEvents: React.FC = () => {
  return (
    <Card className="col-span-1 md:col-span-2">
      <CardHeader>
        <CardTitle>Microbiology Events</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div>
          <Label htmlFor="microevent_id">Microbiology Event ID</Label>
          <Input id="microevent_id" placeholder="Enter Microbiology Event ID" />
        </div>
        <div>
          <Label htmlFor="micro_specimen_type">Specimen Type</Label>
          <Input id="micro_specimen_type" placeholder="Enter Specimen Type" />
        </div>
        <div>
          <Label htmlFor="organism">Organism</Label>
          <Input id="organism" placeholder="Enter Organism" />
        </div>
        <div>
          <Label htmlFor="antibiotic">Antibiotic</Label>
          <Input id="antibiotic" placeholder="Enter Antibiotic" />
        </div>
        <div>
          <Label htmlFor="sensitivity">Sensitivity</Label>
          <Input id="sensitivity" placeholder="Enter Sensitivity" />
        </div>
        <div>
          <Label htmlFor="micro_test_time">Test Time</Label>
          <Input id="micro_test_time" type="datetime-local" />
        </div>
      </CardContent>
    </Card>
  );
};

export default MicrobiologyEvents;

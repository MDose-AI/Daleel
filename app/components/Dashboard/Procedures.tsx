"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Procedures: React.FC = () => {
  return (
    <Card className="col-span-1 md:col-span-2">
      <CardHeader>
        <CardTitle>Procedures</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div>
          <Label htmlFor="procedure_id">Procedure ID</Label>
          <Input id="procedure_id" placeholder="Enter Procedure ID" />
        </div>
        <div>
          <Label htmlFor="procedure_icd">ICD Code</Label>
          <Input id="procedure_icd" placeholder="Enter ICD Code" />
        </div>
        <div>
          <Label htmlFor="procedure_description">Description</Label>
          <Textarea
            id="procedure_description"
            placeholder="Enter Procedure Description"
          />
        </div>
        <div>
          <Label htmlFor="procedure_time">Procedure Time</Label>
          <Input id="procedure_time" type="datetime-local" />
        </div>
      </CardContent>
    </Card>
  );
};

export default Procedures;

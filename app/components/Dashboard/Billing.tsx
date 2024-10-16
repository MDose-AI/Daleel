// src/components/Dashboard/Billing.tsx
"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Billing: React.FC = () => {
  return (
    <Card className="col-span-1 md:col-span-2">
      <CardHeader>
        <CardTitle>Billing</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div>
          <Label htmlFor="bill_id">Bill ID</Label>
          <Input id="bill_id" placeholder="Enter Bill ID" />
        </div>
        <div>
          <Label htmlFor="billing_code">Billing Code</Label>
          <Input id="billing_code" placeholder="Enter Billing Code" />
        </div>
        <div>
          <Label htmlFor="amount">Amount</Label>
          <Input id="amount" type="number" placeholder="Enter Amount" />
        </div>
        <div>
          <Label htmlFor="bill_description">Description</Label>
          <Textarea id="bill_description" placeholder="Enter Description" />
        </div>
      </CardContent>
    </Card>
  );
};

export default Billing;

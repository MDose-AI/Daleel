"use client";

import React, { createContext, useState } from "react";

interface PatientInfo {
  subject_id: string;
  gender: string;
  date_of_birth: string;
  dod: string;
  anchor_year: string;
  anchor_age: string;
  insurance_type: string;
  hospital_stay_count: string;
}

interface Admission {
  hadm_id: string;
  admit_time: string;
  discharge_time: string;
  hospital_service: string;
}

interface IcuStay {
  stay_id: string;
  first_careunit: string;
  last_careunit: string;
}

interface DashboardContextProps {
  patientInfo: PatientInfo;
  setPatientInfo: React.Dispatch<React.SetStateAction<PatientInfo>>;
  admissions: Admission[];
  setAdmissions: React.Dispatch<React.SetStateAction<Admission[]>>;
  currentAdmission: Admission;
  setCurrentAdmission: React.Dispatch<React.SetStateAction<Admission>>;
  handlePatientInfoChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAdmissionChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddAdmission: () => void;
  handleDeleteAdmission: (index: number) => void;
  icuStays: IcuStay[];
  setIcuStays: React.Dispatch<React.SetStateAction<IcuStay[]>>;
  currentIcuStay: IcuStay;
  setCurrentIcuStay: React.Dispatch<React.SetStateAction<IcuStay>>;
  handleIcuStayChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddIcuStay: () => void;
  handleDeleteIcuStay: (index: number) => void;
}

export const DashboardContext = createContext<DashboardContextProps | null>(
  null
);

export const DashboardProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Patient Information state
  const [patientInfo, setPatientInfo] = useState<PatientInfo>({
    subject_id: "",
    gender: "",
    date_of_birth: "",
    dod: "",
    anchor_year: "",
    anchor_age: "",
    insurance_type: "",
    hospital_stay_count: "",
  });

  // Admission Details state
  const [admissions, setAdmissions] = useState<Admission[]>([]);
  const [currentAdmission, setCurrentAdmission] = useState<Admission>({
    hadm_id: "",
    admit_time: "",
    discharge_time: "",
    hospital_service: "",
  });

  // ICU Stay state
  const [icuStays, setIcuStays] = useState<IcuStay[]>([]);
  const [currentIcuStay, setCurrentIcuStay] = useState<IcuStay>({
    stay_id: "",
    first_careunit: "",
    last_careunit: "",
  });

  // Event handlers for Patient Information
  const handlePatientInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setPatientInfo((prev) => ({ ...prev, [id]: value }));
  };

  // Event handlers for Admission Details
  const handleAdmissionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setCurrentAdmission((prev) => ({ ...prev, [id]: value }));
  };

  const handleAddAdmission = () => {
    setAdmissions((prev) => [...prev, currentAdmission]);
    setCurrentAdmission({
      hadm_id: "",
      admit_time: "",
      discharge_time: "",
      hospital_service: "",
    });
  };

  const handleDeleteAdmission = (index: number) => {
    setAdmissions((prev) => prev.filter((_, i) => i !== index));
  };

  // Event handlers for ICU Stay
  const handleIcuStayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setCurrentIcuStay((prev) => ({ ...prev, [id]: value }));
  };

  const handleAddIcuStay = () => {
    setIcuStays((prev) => [...prev, currentIcuStay]);
    setCurrentIcuStay({
      stay_id: "",
      first_careunit: "",
      last_careunit: "",
    });
  };

  const handleDeleteIcuStay = (index: number) => {
    setIcuStays((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <DashboardContext.Provider
      value={{
        patientInfo,
        setPatientInfo,
        admissions,
        setAdmissions,
        currentAdmission,
        setCurrentAdmission,
        handlePatientInfoChange,
        handleAdmissionChange,
        handleAddAdmission,
        handleDeleteAdmission,
        icuStays,
        setIcuStays,
        currentIcuStay,
        setCurrentIcuStay,
        handleIcuStayChange,
        handleAddIcuStay,
        handleDeleteIcuStay,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

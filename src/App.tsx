import React, { useState, useEffect } from 'react';
import { CompanyProfileData } from './types';
import { initialCompanyProfileData } from './data/initialData';
import { Navbar } from './components/Navbar';
import { CoverSection } from './components/CoverSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { FleetSection } from './components/FleetSection';
import { ClientsSection } from './components/ClientsSection';
import { LegalitySection } from './components/LegalitySection';
import { BranchesSection } from './components/BranchesSection';
import { ContactSection } from './components/ContactSection';
import { EditProfileModal } from './components/EditProfileModal';

const STORAGE_KEY = 'pt_altran_guna_usaha_profile_v2';

export default function App() {
  const [profileData, setProfileData] = useState<CompanyProfileData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Failed to load local company profile data:', e);
    }
    return initialCompanyProfileData;
  });

  const [activeSection, setActiveSection] = useState<string>('cover');
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);

  // Save changes to localStorage
  const handleSaveData = (updated: CompanyProfileData) => {
    setProfileData(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save to localStorage:', e);
    }
  };

  const handleResetData = () => {
    if (confirm('Apakah Anda yakin ingin mengembalikan semua data Company Profile ke format standar awal?')) {
      setProfileData(initialCompanyProfileData);
      localStorage.removeItem(STORAGE_KEY);
      setIsEditModalOpen(false);
    }
  };

  const handleUpdateFleetImage = (fleetId: string, newUrl: string) => {
    const updatedFleets = profileData.fleets.map((f) =>
      f.id === fleetId ? { ...f, imageUrl: newUrl } : f
    );
    handleSaveData({ ...profileData, fleets: updatedFleets });
  };

  const handleDownloadPdf = () => {
    const link = document.createElement('a');
    link.href = '/documents/company-profile-altran.pdf';
    link.download = 'Company-Profile-PT-Altran-Guna-Usaha.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950 antialiased">
      {/* Fixed Navbar */}
      <Navbar
        data={profileData}
        onOpenPdfModal={handleDownloadPdf}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Page Sections */}
      <main>
        <CoverSection
          data={profileData}
          onOpenPdfModal={handleDownloadPdf}
        />

        <AboutSection data={profileData} />

        <ServicesSection data={profileData} />

        <FleetSection
          data={profileData}
          onUpdateFleetImage={handleUpdateFleetImage}
        />

        <ClientsSection data={profileData} />

        <LegalitySection
  data={profileData}
/>
        <BranchesSection data={profileData} />

        <ContactSection
          data={profileData}
          onOpenPdfModal={handleDownloadPdf}
        />
      </main>

      {/* Edit Modal */}
      <EditProfileModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        data={profileData}
        onSave={handleSaveData}
        onResetToDefault={handleResetData}
      />
    </div>
  );
}

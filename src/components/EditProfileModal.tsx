import React, { useState } from 'react';
import { CompanyProfileData, ClientPartner, FleetItem, LegalDocument, BranchLocation } from '../types';
import { X, Save, Plus, Trash2, RotateCcw, Building2, Truck, Shield, MapPin, Phone } from 'lucide-react';

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: CompanyProfileData;
  onSave: (updated: CompanyProfileData) => void;
  onResetToDefault: () => void;
}

export const EditProfileModal: React.FC<EditProfileModalProps> = ({
  isOpen,
  onClose,
  data,
  onSave,
  onResetToDefault
}) => {
  const [formData, setFormData] = useState<CompanyProfileData>(data);
  const [activeTab, setActiveTab] = useState<'general' | 'about' | 'services' | 'fleets' | 'clients' | 'legal' | 'branches'>('general');

  if (!isOpen) return null;

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Client partner helpers
  const handleClientChange = (index: number, field: keyof ClientPartner, value: string) => {
    const updated = [...formData.clients];
    updated[index] = { ...updated[index], [field]: value };
    setFormData((prev) => ({ ...prev, clients: updated }));
  };

  const addClient = () => {
    const newClient: ClientPartner = {
      id: `cl-${Date.now()}`,
      name: "PT. Nama Mitra Baru",
      industry: "Industri & Manufaktur",
      location: "Indonesia"
    };
    setFormData((prev) => ({ ...prev, clients: [...prev.clients, newClient] }));
  };

  const removeClient = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      clients: prev.clients.filter((_, i) => i !== index)
    }));
  };

  // Fleet helpers
  const handleFleetChange = (index: number, field: keyof FleetItem, value: any) => {
    const updated = [...formData.fleets];
    updated[index] = { ...updated[index], [field]: value };
    setFormData((prev) => ({ ...prev, fleets: updated }));
  };

  // Legal helpers
  const handleLegalChange = (index: number, field: keyof LegalDocument, value: string) => {
    const updated = [...formData.legalDocuments];
    updated[index] = { ...updated[index], [field]: value };
    setFormData((prev) => ({ ...prev, legalDocuments: updated }));
  };

  // Branch helpers
  const handleBranchChange = (index: number, field: keyof BranchLocation, value: string) => {
    const updated = [...formData.branches];
    updated[index] = { ...updated[index], [field]: value };
    setFormData((prev) => ({ ...prev, branches: updated }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 text-white rounded-3xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden my-auto">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950">
          <div>
            <h2 className="text-xl font-black text-white">Edit Data Company Profile</h2>
            <p className="text-xs text-slate-400">
              Ubah informasi, mitra klien, foto armada, dan legalitas PT. ALTRAN GUNA USAHA
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Subtabs */}
        <div className="flex overflow-x-auto border-b border-slate-800 bg-slate-950/60 p-2 gap-1 text-xs">
          {[
            { id: 'general', label: 'Umum & Kontak', icon: Phone },
            { id: 'about', label: 'Sejarah & Visi', icon: Building2 },
            { id: 'fleets', label: 'Armada', icon: Truck },
            { id: 'clients', label: 'Mitra Klien', icon: Building2 },
            { id: 'legal', label: 'Legalitas', icon: Shield },
            { id: 'branches', label: 'Cabang', icon: MapPin }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3.5 py-2 rounded-xl font-bold whitespace-nowrap flex items-center gap-1.5 transition-colors ${
                  activeTab === tab.id
                    ? 'bg-amber-500 text-slate-950 shadow'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Modal Form Body */}
        <form onSubmit={handleFormSubmit} className="flex-1 overflow-y-auto p-6 space-y-6 text-xs">
          
          {/* TAB 1: General Info */}
          {activeTab === 'general' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-300 mb-1">Nama Perusahaan</label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleTextChange}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white font-semibold focus:border-amber-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-300 mb-1">Tagline Subtitle</label>
                  <input
                    type="text"
                    name="tagline"
                    value={formData.tagline}
                    onChange={handleTextChange}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white focus:border-amber-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-300 mb-1">Telepon / Kontak</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleTextChange}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white focus:border-amber-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-300 mb-1">Nomor WhatsApp (Tanpa +)</label>
                  <input
                    type="text"
                    name="whatsappNumber"
                    value={formData.whatsappNumber}
                    onChange={handleTextChange}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white focus:border-amber-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-300 mb-1">Email Resmi</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleTextChange}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white focus:border-amber-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-300 mb-1">URL Logo Perusahaan</label>
                  <input
                    type="text"
                    name="logoUrl"
                    value={formData.logoUrl || ''}
                    onChange={handleTextChange}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white focus:border-amber-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-300 mb-1">Alamat Kantor Pusat (Banyuwangi)</label>
                <textarea
                  name="headOfficeAddress"
                  rows={2}
                  value={formData.headOfficeAddress}
                  onChange={handleTextChange}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white focus:border-amber-500 outline-none"
                />
              </div>
            </div>
          )}

          {/* TAB 2: Sejarah & Visi */}
          {activeTab === 'about' && (
            <div className="space-y-4">
              <div>
                <label className="block font-bold text-slate-300 mb-1">Sejarah Singkat (2017 &bull; 2022)</label>
                <textarea
                  name="aboutHistory"
                  rows={3}
                  value={formData.aboutHistory}
                  onChange={handleTextChange}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white focus:border-amber-500 outline-none"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-300 mb-1">Fokus Bisnis & Armada</label>
                <textarea
                  name="aboutFocus"
                  rows={2}
                  value={formData.aboutFocus}
                  onChange={handleTextChange}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white focus:border-amber-500 outline-none"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-300 mb-1">Visi Perusahaan</label>
                <textarea
                  name="vision"
                  rows={2}
                  value={formData.vision}
                  onChange={handleTextChange}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white focus:border-amber-500 outline-none"
                />
              </div>
            </div>
          )}

          {/* TAB 3: Armada */}
          {activeTab === 'fleets' && (
            <div className="space-y-6">
              {formData.fleets.map((fleet, idx) => (
                <div key={fleet.id} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-amber-400">Armada #{idx + 1}: {fleet.name}</span>
                    <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded">{fleet.category}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-semibold text-slate-400 mb-1">Nama Unit Armada</label>
                      <input
                        type="text"
                        value={fleet.name}
                        onChange={(e) => handleFleetChange(idx, 'name', e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl p-2 text-white"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-slate-400 mb-1">Kapasitas</label>
                      <input
                        type="text"
                        value={fleet.capacity}
                        onChange={(e) => handleFleetChange(idx, 'capacity', e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl p-2 text-white"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-slate-400 mb-1">Dimensi</label>
                      <input
                        type="text"
                        value={fleet.dimensions}
                        onChange={(e) => handleFleetChange(idx, 'dimensions', e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl p-2 text-white"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-slate-400 mb-1">URL Foto Armada</label>
                      <input
                        type="text"
                        value={fleet.imageUrl}
                        onChange={(e) => handleFleetChange(idx, 'imageUrl', e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl p-2 text-white"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: Klien (12 Partners) */}
          {activeTab === 'clients' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-300">Daftar Klien & Mitra Kerja ({formData.clients.length})</span>
                <button
                  type="button"
                  onClick={addClient}
                  className="px-3 py-1.5 rounded-xl bg-amber-500 text-slate-950 font-bold flex items-center gap-1 hover:bg-amber-400"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Tambah Klien</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-96 overflow-y-auto pr-1">
                {formData.clients.map((client, idx) => (
                  <div key={client.id} className="p-3 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-extrabold text-amber-400">#{idx + 1}</span>
                      <button
                        type="button"
                        onClick={() => removeClient(idx)}
                        className="text-red-400 hover:text-red-300 p-1"
                        title="Hapus Klien"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div>
                      <label className="block text-[10px] text-slate-400">Nama Perusahaan Klien</label>
                      <input
                        type="text"
                        value={client.name}
                        onChange={(e) => handleClientChange(idx, 'name', e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg p-1.5 text-white font-semibold"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] text-slate-400">Sektor / Industri</label>
                      <input
                        type="text"
                        value={client.industry}
                        onChange={(e) => handleClientChange(idx, 'industry', e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg p-1.5 text-white"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: Legalitas */}
          {activeTab === 'legal' && (
            <div className="space-y-4">
              {formData.legalDocuments.map((doc, idx) => (
                <div key={doc.id} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                  <div className="font-bold text-amber-400">{doc.title}</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] text-slate-400 mb-1">Nomor Berkas / SK</label>
                      <input
                        type="text"
                        value={doc.number}
                        onChange={(e) => handleLegalChange(idx, 'number', e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl p-2 text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] text-slate-400 mb-1">Instansi Penerbit</label>
                      <input
                        type="text"
                        value={doc.issuer}
                        onChange={(e) => handleLegalChange(idx, 'issuer', e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl p-2 text-white"
                      />
                    </div>
                    
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 6: Cabang */}
          {activeTab === 'branches' && (
            <div className="space-y-4">
              {formData.branches.map((br, idx) => (
                <div key={br.id} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                  <div className="font-bold text-amber-400">{br.city} ({br.badge})</div>
                  <div className="grid grid-cols-1 gap-3">
                    <div>
                      <label className="block text-[10px] text-slate-400 mb-1">Alamat Lengkap</label>
                      <input
                        type="text"
                        value={br.address}
                        onChange={(e) => handleBranchChange(idx, 'address', e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl p-2 text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] text-slate-400 mb-1">Cakupan Wilayah Operasional</label>
                      <input
                        type="text"
                        value={br.coverageArea}
                        onChange={(e) => handleBranchChange(idx, 'coverageArea', e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl p-2 text-white"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Footer Save Actions */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={onResetToDefault}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-red-950 hover:text-red-300 text-slate-400 text-xs font-bold flex items-center gap-1.5 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Data Awal</span>
            </button>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold"
              >
                Batal
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs flex items-center gap-2 shadow-lg"
              >
                <Save className="w-4 h-4" />
                <span>Simpan Perubahan</span>
              </button>
            </div>
          </div>

        </form>

      </div>
    </div>
  );
};

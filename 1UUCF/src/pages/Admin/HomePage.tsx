import React, { useState, useEffect } from 'react';
import { Upload, Edit2, Save } from 'lucide-react';
import AdminLayout from '../../components/AdminLayout';

interface ImpactData {
  id: string;
  value: number;
  label: string;
}

interface OrgData {
  id: string;
  value: number;
  label: string;
}

const HomePage = () => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [title, setTitle] = useState('Welcome to Our Organization');
  const [description, setDescription] = useState('Our organization is a Non-Profit Organization focused on enhancing public programs.');
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isEditingDescription, setIsEditingDescription] = useState(false);

  const [impactData, setImpactData] = useState<ImpactData[]>([
    { id: '1', value: 3500, label: 'Adolescents Helped' },
    { id: '2', value: 62, label: 'Girl Participation' },
    { id: '3', value: 32, label: 'Learning Centers' },
    { id: '4', value: 1000, label: 'Total Donors' },
  ]);

  const [orgData, setOrgData] = useState<OrgData[]>([
    { id: '1', value: 30, label: 'Total Staff' },
    { id: '2', value: 55, label: 'Total Volunteers' },
    { id: '3', value: 4, label: 'States' },
    { id: '4', value: 8, label: 'Districts' },
  ]);

  // Reset state when navigating to this page
  useEffect(() => {
    setPreviewImage(null);
    setTitle('Welcome to Our Organization');
    setDescription('Our organization is a Non-Profit Organization focused on enhancing public programs.');
    setIsEditingTitle(false);
    setIsEditingDescription(false);
    setImpactData([
      { id: '1', value: 3500, label: 'Adolescents Helped' },
      { id: '2', value: 62, label: 'Girl Participation' },
      { id: '3', value: 32, label: 'Learning Centers' },
      { id: '4', value: 1000, label: 'Total Donors' },
    ]);
    setOrgData([
      { id: '1', value: 30, label: 'Total Staff' },
      { id: '2', value: 55, label: 'Total Volunteers' },
      { id: '3', value: 4, label: 'States' },
      { id: '4', value: 8, label: 'Districts' },
    ]);
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImpactDataChange = (id: string, value: number) => {
    setImpactData(prev => 
      prev.map(item => 
        item.id === id ? { ...item, value } : item
      )
    );
  };

  const handleOrgDataChange = (id: string, value: number) => {
    setOrgData(prev => 
      prev.map(item => 
        item.id === id ? { ...item, value } : item
      )
    );
  };

  return (
    <AdminLayout>
      <div className="max-w-5xl mx-auto">
        {/* Info Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Info Section</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <div className="flex items-center gap-2">
                  {isEditingTitle ? (
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="flex-1 p-2 border border-gray-300 rounded-lg"
                    />
                  ) : (
                    <p className="flex-1 p-2">{title}</p>
                  )}
                  <button
                    onClick={() => setIsEditingTitle(!isEditingTitle)}
                    className="p-2 text-gray-600 hover:text-orange-500"
                  >
                    {isEditingTitle ? <Save size={20} /> : <Edit2 size={20} />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <div className="flex items-start gap-2">
                  {isEditingDescription ? (
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="flex-1 p-2 border border-gray-300 rounded-lg min-h-[100px]"
                    />
                  ) : (
                    <p className="flex-1 p-2">{description}</p>
                  )}
                  <button
                    onClick={() => setIsEditingDescription(!isEditingDescription)}
                    className="p-2 text-gray-600 hover:text-orange-500"
                  >
                    {isEditingDescription ? <Save size={20} /> : <Edit2 size={20} />}
                  </button>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Hero Image</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                {previewImage ? (
                  <div className="relative">
                    <img
                      src={previewImage}
                      alt="Preview"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <button
                      onClick={() => setPreviewImage(null)}
                      className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md"
                    >
                      ×
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-48">
                    <Upload className="w-8 h-8 text-gray-400 mb-2" />
                    <label className="cursor-pointer bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                      Upload Image
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageChange}
                      />
                    </label>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactData.map((stat) => (
              <div key={stat.id} className="relative group">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {stat.label}
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      value={stat.value}
                      onChange={(e) => handleImpactDataChange(stat.id, parseInt(e.target.value))}
                      className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity p-2 text-gray-600 hover:text-orange-500">
                      <Save size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Organization Info */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Organization Info</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {orgData.map((stat) => (
              <div key={stat.id} className="relative group">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {stat.label}
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      value={stat.value}
                      onChange={(e) => handleOrgDataChange(stat.id, parseInt(e.target.value))}
                      className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity p-2 text-gray-600 hover:text-orange-500">
                      <Save size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default HomePage;
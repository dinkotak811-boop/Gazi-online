'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { LogOut, Mail, User, Phone, MessageSquare, Trash2, CheckCircle } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import GlassButton from '@/components/ui/GlassButton';

interface Inquiry {
  _id: string;
  name: string;
  phone: string;
  service: string;
  message: string;
  status: 'new' | 'read' | 'replied';
  createdAt: string;
}

export default function AdminDashboardPage() {
  const router = useRouter();
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ total: 0, new: 0, read: 0 });

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin');
      return;
    }
    fetchInquiries();
  }, [router]);

  const fetchInquiries = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('http://localhost:5000/api/inquiries', {
        headers: { 'Authorization': `Bearer ${token}` }
      });

      if (response.ok) {
        const data = await response.json();
        setInquiries(data);
        setStats({
          total: data.length,
          new: data.filter((i: Inquiry) => i.status === 'new').length,
          read: data.filter((i: Inquiry) => i.status === 'read').length,
        });
      } else if (response.status === 401) {
        localStorage.removeItem('adminToken');
        router.push('/admin');
      }
    } catch (error) {
      console.error('Failed to fetch inquiries');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    router.push('/admin');
  };

  const updateStatus = async (id: string, status: string) => {
    try {
      const token = localStorage.getItem('adminToken');
      await fetch(`http://localhost:5000/api/inquiries/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ status }),
      });
      fetchInquiries();
    } catch (error) {
      console.error('Failed to update status');
    }
  };

  const deleteInquiry = async (id: string) => {
    if (!confirm('Are you sure you want to delete this inquiry?')) return;
    try {
      const token = localStorage.getItem('adminToken');
      await fetch(`http://localhost:5000/api/inquiries/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      fetchInquiries();
    } catch (error) {
      console.error('Failed to delete inquiry');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary-green border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-gray-600 dark:text-gray-400">গাজী অনলাইন অ্যাডমিন প্যানেল</p>
          </div>
          <GlassButton variant="secondary" onClick={handleLogout}>
            <LogOut className="w-5 h-5" /> Logout
          </GlassButton>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-8">
          <GlassCard className="p-6 text-center">
            <div className="text-3xl font-bold text-primary-green">{stats.total}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Total Inquiries</div>
          </GlassCard>
          <GlassCard className="p-6 text-center">
            <div className="text-3xl font-bold text-primary-blue">{stats.new}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">New</div>
          </GlassCard>
          <GlassCard className="p-6 text-center">
            <div className="text-3xl font-bold text-purple-500">{stats.read}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Read</div>
          </GlassCard>
        </div>

        <GlassCard className="overflow-hidden">
          <div className="p-6 border-b border-white/20">
            <h2 className="text-xl font-bold">Customer Inquiries</h2>
          </div>
          
          {inquiries.length === 0 ? (
            <div className="p-12 text-center text-gray-500">
              <Mail className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>No inquiries yet</p>
            </div>
          ) : (
            <div className="divide-y divide-white/10">
              {inquiries.map((inquiry) => (
                <motion.div key={inquiry._id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 hover:bg-white/5 transition-colors">
                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <User className="w-5 h-5 text-primary-green" />
                        <span className="font-semibold">{inquiry.name}</span>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          inquiry.status === 'new' ? 'bg-green-500/20 text-green-600' : 
                          inquiry.status === 'read' ? 'bg-blue-500/20 text-blue-600' : 'bg-gray-500/20 text-gray-600'
                        }`}>{inquiry.status}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 mb-2">
                        <Phone className="w-4 h-4" />{inquiry.phone}
                        <span className="mx-2">•</span>
                        <span className="capitalize">{inquiry.service}</span>
                      </div>
                      {inquiry.message && (
                        <p className="text-gray-700 dark:text-gray-300 text-sm pl-8">
                          <MessageSquare className="w-4 h-4 inline mr-2" />{inquiry.message}
                        </p>
                      )}
                      <p className="text-xs text-gray-500 mt-2 pl-8">{new Date(inquiry.createdAt).toLocaleString('bn-BD')}</p>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      {inquiry.status === 'new' && (
                        <button onClick={() => updateStatus(inquiry._id, 'read')} className="p-2 rounded-lg bg-blue-500/20 text-blue-600 hover:bg-blue-500/30 transition-colors" title="Mark as read">
                          <CheckCircle className="w-5 h-5" />
                        </button>
                      )}
                      <button onClick={() => deleteInquiry(inquiry._id)} className="p-2 rounded-lg bg-red-500/20 text-red-600 hover:bg-red-500/30 transition-colors" title="Delete">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </GlassCard>
      </div>
    </div>
  );
}

import React from 'react';
import { 
  LayoutDashboard, ShoppingCart, User, Settings, 
  MessageSquare, Briefcase, FileText, Bell, 
  Plus, ArrowUpRight, CheckCircle2, Clock
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';

const ClientPortal = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h1 className="text-3xl font-bold text-primary">Welcome back, Khalil!</h1>
          <p className="text-muted-foreground mt-1">Manage your services, orders, and tickets.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="gap-2 h-11 px-6 rounded-xl">
            <Settings size={18} />
            Settings
          </Button>
          <Button className="bg-accent hover:bg-accent/90 gap-2 h-11 px-6 rounded-xl">
            <Plus size={18} />
            New Request
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[
          { label: 'Active Projects', value: '4', icon: Briefcase, color: 'text-blue-500', bg: 'bg-blue-50' },
          { label: 'Orders placed', value: '12', icon: ShoppingCart, color: 'text-purple-500', bg: 'bg-purple-50' },
          { label: 'Support Tickets', value: '1', icon: MessageSquare, color: 'text-orange-500', bg: 'bg-orange-50' },
          { label: 'Total Invoices', value: '24', icon: FileText, color: 'text-green-500', bg: 'bg-green-50' },
        ].map((stat, i) => (
          <Card key={i} className="border-none shadow-sm overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.bg} ${stat.color}`}>
                  <stat.icon size={24} />
                </div>
                <Badge variant="secondary" className="bg-gray-100 text-gray-500 font-bold">+15%</Badge>
              </div>
              <p className="text-muted-foreground font-medium text-sm">{stat.label}</p>
              <h3 className="text-3xl font-bold text-primary mt-1">{stat.value}</h3>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="projects" className="space-y-8">
        <TabsList className="bg-white border p-1 h-14 rounded-2xl w-full sm:w-auto overflow-x-auto">
          <TabsTrigger value="projects" className="rounded-xl px-8 data-[state=active]:bg-primary data-[state=active]:text-white">Active Projects</TabsTrigger>
          <TabsTrigger value="orders" className="rounded-xl px-8 data-[state=active]:bg-primary data-[state=active]:text-white">Order History</TabsTrigger>
          <TabsTrigger value="tickets" className="rounded-xl px-8 data-[state=active]:bg-primary data-[state=active]:text-white">Support</TabsTrigger>
        </TabsList>

        <TabsContent value="projects">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {[
                { title: 'Database Migration', status: 'In Progress', progress: 75, deadline: 'May 12, 2026' },
                { title: 'Business Website V2', status: 'In Progress', progress: 40, deadline: 'May 28, 2026' },
                { title: 'Data Pipeline Setup', status: 'Reviewing', progress: 95, deadline: 'May 05, 2026' },
              ].map((proj, i) => (
                <Card key={i} className="border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center">
                          <LayoutDashboard className="text-accent" />
                        </div>
                        <div>
                          <h4 className="font-bold text-primary text-lg">{proj.title}</h4>
                          <p className="text-xs text-muted-foreground flex items-center gap-1">
                            <Clock size={12} /> Deadline: {proj.deadline}
                          </p>
                        </div>
                      </div>
                      <Badge className={proj.status === 'Reviewing' ? 'bg-orange-500' : 'bg-blue-500'}>
                        {proj.status}
                      </Badge>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-muted-foreground">Completion Progress</span>
                        <span className="font-bold text-primary">{proj.progress}%</span>
                      </div>
                      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${proj.progress}%` }}
                          transition={{ duration: 1, delay: i * 0.2 }}
                          className="h-full bg-accent"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="space-y-6">
              <Card className="border-none shadow-sm bg-primary text-white">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-xl">
                    Recent Alerts
                    <Bell size={18} className="text-accent" />
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { text: 'Invoice #442 Paid Successfully', time: '2 hours ago' },
                    { text: 'Project "Database Migration" updated', time: 'Yesterday' },
                    { text: 'New message from Support Team', time: '2 days ago' },
                  ].map((alert, i) => (
                    <div key={i} className="p-4 bg-white/10 rounded-xl border border-white/5 hover:bg-white/20 transition-colors">
                      <p className="text-sm font-medium">{alert.text}</p>
                      <p className="text-xs opacity-50 mt-1">{alert.time}</p>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10 mt-2">
                    View All Activity
                  </Button>
                </CardContent>
              </Card>

              <div className="p-8 bg-accent/10 rounded-3xl border border-accent/20">
                <h4 className="font-bold text-primary mb-2">Need immediate help?</h4>
                <p className="text-sm text-muted-foreground mb-6">Our dedicated support managers are ready to assist you 24/7.</p>
                <Button className="w-full bg-accent hover:bg-accent/90 shadow-lg shadow-accent/20">
                  Open Support Ticket
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="orders">
           <Card className="border-gray-100 shadow-sm">
             <CardContent className="p-0">
               <div className="overflow-x-auto">
                 <table className="w-full text-left border-collapse">
                   <thead>
                     <tr className="bg-gray-50 border-b">
                       <th className="px-6 py-4 font-bold text-primary text-sm uppercase tracking-wider">Order ID</th>
                       <th className="px-6 py-4 font-bold text-primary text-sm uppercase tracking-wider">Product</th>
                       <th className="px-6 py-4 font-bold text-primary text-sm uppercase tracking-wider">Date</th>
                       <th className="px-6 py-4 font-bold text-primary text-sm uppercase tracking-wider">Status</th>
                       <th className="px-6 py-4 font-bold text-primary text-sm uppercase tracking-wider text-right">Amount</th>
                     </tr>
                   </thead>
                   <tbody className="divide-y divide-gray-100">
                     {[
                       { id: '#KT-9021', name: 'HP EliteBook 840 G8', date: 'Apr 12, 2026', status: 'Delivered', amount: '₦450,000' },
                       { id: '#KT-8842', name: 'MacBook Air M2', date: 'Mar 28, 2026', status: 'Delivered', amount: '₦850,000' },
                       { id: '#KT-8531', name: 'Logitech Mouse + Keyboard', date: 'Feb 15, 2026', status: 'Delivered', amount: '₦60,000' },
                     ].map((order, i) => (
                       <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                         <td className="px-6 py-4 font-mono text-sm text-muted-foreground">{order.id}</td>
                         <td className="px-6 py-4 font-bold text-primary">{order.name}</td>
                         <td className="px-6 py-4 text-sm text-muted-foreground">{order.date}</td>
                         <td className="px-6 py-4">
                           <Badge className="bg-green-500 flex w-fit items-center gap-1">
                             <CheckCircle2 size={12} /> {order.status}
                           </Badge>
                         </td>
                         <td className="px-6 py-4 text-right font-black text-primary">{order.amount}</td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
               </div>
             </CardContent>
           </Card>
        </TabsContent>

        <TabsContent value="tickets">
           <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300">
             <MessageSquare size={48} className="mx-auto text-gray-300 mb-6" />
             <h3 className="text-2xl font-bold text-primary mb-2">No active support tickets</h3>
             <p className="text-muted-foreground mb-8">If you have any issues or questions, our team is here to help.</p>
             <Button className="h-12 px-8 bg-primary hover:bg-primary/90 rounded-xl">Create New Ticket</Button>
           </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ClientPortal;

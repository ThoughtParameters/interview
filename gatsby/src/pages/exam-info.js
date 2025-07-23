import React from 'react';
import Layout from '../components/layout';
import { SEO } from '../components/seo';

const examData = {
  cka: {
    title: 'Certified Kubernetes Administrator (CKA)',
    description: 'The CKA certification is for Kubernetes administrators, cloud administrators, and other IT professionals who manage Kubernetes instances.',
    domains: [
      { name: 'Cluster Architecture, Installation & Configuration', weight: '25%' },
      { name: 'Workloads & Scheduling', weight: '15%' },
      { name: 'Services & Networking', weight: '20%' },
      { name: 'Storage', weight: '10%' },
      { name: 'Troubleshooting', weight: '30%' },
    ],
  },
  ckad: {
    title: 'Certified Kubernetes Application Developer (CKAD)',
    description: 'The CKAD certification is for Kubernetes engineers, cloud engineers, and other IT professionals responsible for building, deploying, and configuring cloud-native applications with Kubernetes.',
    domains: [
      { name: 'Application Design and Build', weight: '20%' },
      { name: 'Application Deployment', weight: '20%' },
      { name: 'Application Environment, Configuration, and Security', weight: '25%' },
      { name: 'Application Observability and Maintenance', weight: '15%' },
      { name: 'Services and Networking', weight: '20%' },
    ],
  },
};

const ExamInfoPage = () => {
  return (
    <Layout>
      <SEO title="Exam Information" />
      <h1 className="text-3xl font-bold mb-6">Exam Information</h1>
      <div className="space-y-12">
        <ExamSection exam={examData.cka} />
        <ExamSection exam={examData.ckad} />
      </div>
    </Layout>
  );
};

const ExamSection = ({ exam }) => (
  <section>
    <h2 className="text-2xl font-bold mb-4">{exam.title}</h2>
    <p className="mb-4">{exam.description}</p>
    <div className="overflow-x-auto">
      <table className="min-w-full bg-gray-800 rounded-lg">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              Domain
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              Weight
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-700">
          {exam.domains.map((domain) => (
            <tr key={domain.name}>
              <td className="px-6 py-4 whitespace-nowrap">{domain.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{domain.weight}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
);

export default ExamInfoPage;

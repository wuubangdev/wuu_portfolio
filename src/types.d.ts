export interface Project {
    id: number;
    title: string;
    imageUrl: string;
    description: string;
    linkGit: string;
    detail?: IProjectDetail;
}

export interface IService {
    id: number;
    title: string;
    imageUrl: string;
    description: string;
    linkGit: string;
}

export interface IProjectDetail {
    title: string;                     // Tiêu đề dự án
    description: string;               // Mô tả chi tiết
    imageUrl: string[];                // Danh sách link ảnh minh họa
    linkLive: string;                  // Link trang web live/demo
    category: string;                  // Phân loại dự án (VD: Website, Mobile App, Landing Page...)
    technologies: string[];            // Các công nghệ chính sử dụng (VD: React, NestJS, MongoDB...)
    libraries: {
        frontend: string[];              // Các thư viện frontend (VD: Tailwind, Axios, Framer Motion...)
        backend: string[];               // Các thư viện backend (VD: Express, TypeORM, Prisma...)
        other?: string[];                // Các thư viện khác (VD: Socket.io, Stripe, Firebase...)
    };
}

export interface IExperience {
    id: number;
    company: string;
    title: string;
    imageUrl: string;
    time: string;
}

export interface ISkill {
    id: number;
    title: string;
    imageUrl: string;
}
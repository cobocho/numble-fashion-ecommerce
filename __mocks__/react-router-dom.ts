import { vi } from 'vitest';

export * from 'react-router-dom';

const navigate = vi.fn();

export const useNavigate = () => navigate;

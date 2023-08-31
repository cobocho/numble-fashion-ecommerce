import { vi } from 'vitest';

export * from 'react-router-dom';

const navigate = vi.fn();

export const useParams = vi.fn().mockReturnValue({ id: 'numbler' });

export const useNavigate = () => navigate;

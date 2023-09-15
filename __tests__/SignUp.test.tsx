import { useNavigate } from 'react-router-dom';
import { describe, it, vi } from 'vitest';
import { findByText, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import queryRender from './utils/queryRender';
import { ROUTE_PATH } from '@/constants/path';

vi.mock('react-router-dom');

describe('로그인페이지 테스트', () => {
  beforeEach(() => {
    queryRender(<SignUp />);
  });

  it('유효하지 않은 ID 입력시 수정 문구가 나타난다..', async () => {
    const id = screen.getByLabelText('ID');
    const submit = screen.getByRole('button', {
      name: '회원가입',
    });

    await userEvent.click(submit);

    const invalidId = await screen.findByText('유효하지 않은 ID입니다!');
    expect(invalidId).toBeDefined();
  });
});

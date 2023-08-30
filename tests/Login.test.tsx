import { useNavigate } from 'react-router-dom';
import { describe, it, vi } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import queryRender from './queryRender';
import Login from '@/pages/Login';
import { ROUTE_PATH } from '@/constants/path';

vi.mock('react-router-dom');

describe('로그인페이지 테스트', () => {
  beforeEach(() => {
    queryRender(<Login />);
  });

  it('비로그인시 헤더에 로그인 버튼이 존재한다.', async () => {
    const login = screen.getAllByRole('link', { name: '로그인' });
    expect(login).toBeDefined();
  });

  it('존재하지 않는 계정으로 접근할 시 알림을 발생시킨다.', async () => {
    const id = screen.getByLabelText('ID');
    const pw = screen.getByLabelText('비밀번호');
    const submit = screen.getByRole('button', { name: '로그인' });

    await userEvent.type(id, 'invalid');
    await userEvent.type(pw, 'invalid');
    await userEvent.click(submit);

    window.alert = vi.fn();

    await waitFor(
      () => {
        expect(window.alert).toHaveBeenCalledWith('존재하지 않는 계정입니다!');
      },
      {
        timeout: 2000,
      }
    );
  });

  it('유효한 계정으로 접근할 시 메인페이지로 리다이렉트된다.', async () => {
    const navigate = useNavigate();

    const id = screen.getByPlaceholderText<HTMLInputElement>('ID를 입력해주세요');
    const pw = screen.getByPlaceholderText<HTMLInputElement>('비밀번호를 입력해주세요');
    const submit = screen.getByRole<HTMLButtonElement>('button', {
      name: '로그인',
    });

    await userEvent.type(id, 'test');
    await userEvent.type(pw, 'test');
    await userEvent.click(submit);

    await waitFor(
      async () => {
        expect(id.value).toBe('test');
        expect(pw.value).toBe('test');

        expect(navigate).toHaveBeenCalledWith(ROUTE_PATH.BASE);
      },
      {
        timeout: 2000,
      }
    );
  });

  it('로그인 시 헤더에 로그인 버튼과 마이페이지 버튼이 생성된다.', async () => {
    await waitFor(
      async () => {
        const logout = screen.getAllByRole('link', { name: '로그아웃' });
        const mypage = screen.getAllByRole('link', { name: '마이페이지' });

        expect(logout).toBeDefined();
        expect(mypage).toBeDefined();
      },
      {
        timeout: 2000,
      }
    );
  });
});

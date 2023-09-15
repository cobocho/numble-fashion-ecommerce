export interface CreateUserForm {
  id: string;
  nickname: string;
  password: string;
  password_check: string;
}

export type CreateUser = Omit<CreateUserForm, 'password_check'>;

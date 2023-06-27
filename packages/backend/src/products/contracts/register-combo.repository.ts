import { Combo } from '../entities/Combo';

export abstract class RegisterComboRepository {
  register: (combo: Combo) => Promise<void>;
}

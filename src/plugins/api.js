import auth from '@/api/auth';
import lessons from '@/api/lessons';
import preferences from '@/api/preferences';
import customs from '@/api/customs';
import users from '@/api/users';

export default ({ $axios }, inject) => {
  inject('api', {
    auth: auth($axios),
    lessons: lessons($axios),
    preferences: preferences($axios),
    customs: customs($axios),
    users: users($axios),
  });
};

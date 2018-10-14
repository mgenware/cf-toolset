import swal from 'sweetalert2';
import ls from '@/ls';

export function error(text: string, title = '') {
  return swal({
    type: 'error',
    title: title || ls.errorTitle,
    text,
  });
}

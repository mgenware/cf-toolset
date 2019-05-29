import Swal from 'sweetalert2';
import ls from '../ls';

export async function error(text: string, title = '') {
  return await Swal.fire({
    type: 'error',
    title: title || ls.errorTitle,
    text,
  });
}

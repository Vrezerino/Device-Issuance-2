import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { destroyInvoice } from '@/app/lib/actions';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import { removeInvoice } from '@/redux/features/invoiceSlice';

export function CreateInvoice() {
  return (
    <Link
      href="/dashboard/invoices/create"
      className="flex h-10 items-center rounded-lg bg-amber-500 px-4 text-sm font-medium text-white transition-colors hover:bg-amber-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Create Invoice</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
};

export function UpdateInvoice({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/invoices/${id}/edit`}
      className="rounded-md border border-orange-200/20 p-2 hover:bg-amber-500"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
};

export async function DeleteInvoice({ id }: { id: string }) {
  //const dispatch = useDispatch<AppDispatch>();
  const deleteInvoiceWithId = destroyInvoice.bind(null, id);
  return (
    <form action={deleteInvoiceWithId}>
      <button className="rounded-md border border-orange-200/20 p-2 hover:bg-red-600">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
};

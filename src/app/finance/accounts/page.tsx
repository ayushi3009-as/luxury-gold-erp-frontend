"use client";

import { useMemo, useState } from "react";

import AccountHeader from "@/components/finance/accounts/AccountHeader";
import AccountSummary from "@/components/finance/accounts/AccountSummary";
import AccountFilters from "@/components/finance/accounts/AccountFilters";
import AccountTable, {
  Account,
} from "@/components/finance/accounts/AccountTable";
import AccountForm, {
  AccountData,
} from "@/components/finance/accounts/AccountForm";

export default function AccountsPage() {
  const [openForm, setOpenForm] = useState(false);
  const [search, setSearch] = useState("");
  const [editingAccount, setEditingAccount] =
    useState<Account | null>(null);

  const [accounts, setAccounts] = useState<Account[]>([
    {
      id: 1,
      accountName: "HDFC Current Account",
      accountNumber: "123456789012",
      type: "Bank",
      balance: 250000,
      status: "Active",
    },
    {
      id: 2,
      accountName: "Cash Counter",
      accountNumber: "CASH001",
      type: "Cash",
      balance: 50000,
      status: "Active",
    },
    {
      id: 3,
      accountName: "ICICI Savings",
      accountNumber: "987654321000",
      type: "Bank",
      balance: 120000,
      status: "Inactive",
    },
  ]);

  const handleSaveAccount = (account: AccountData) => {
    if (account.id) {
      setAccounts((prev) =>
        prev.map((item) =>
          item.id === account.id
            ? {
                ...item,
                ...account,
              }
            : item
        )
      );
    } else {
      const newAccount: Account = {
        id: Date.now(),
        accountName: account.accountName,
        accountNumber: account.accountNumber,
        type: account.type,
        balance: account.balance,
        status: account.status,
      };

      setAccounts((prev) => [newAccount, ...prev]);
    }

    setEditingAccount(null);
    setOpenForm(false);
  };

  const handleDeleteAccount = (id: number) => {
    if (confirm("Delete this account?")) {
      setAccounts((prev) =>
        prev.filter((item) => item.id !== id)
      );
    }
  };

  const handleEditAccount = (account: Account) => {
    setEditingAccount(account);
    setOpenForm(true);
  };

  const handleClose = () => {
    setEditingAccount(null);
    setOpenForm(false);
  };

  const filteredAccounts = useMemo(() => {
    const keyword = search.toLowerCase();

    return accounts.filter(
      (account) =>
        account.accountName
          .toLowerCase()
          .includes(keyword) ||
        account.accountNumber
          .toLowerCase()
          .includes(keyword) ||
        account.type
          .toLowerCase()
          .includes(keyword) ||
        account.status
          .toLowerCase()
          .includes(keyword)
    );
  }, [accounts, search]);

  const totalBalance = accounts.reduce(
    (sum, account) => sum + account.balance,
    0
  );

  const bankBalance = accounts
    .filter((a) => a.type === "Bank")
    .reduce((sum, a) => sum + a.balance, 0);

  const cashBalance = accounts
    .filter((a) => a.type === "Cash")
    .reduce((sum, a) => sum + a.balance, 0);

  return (
    <div className="min-h-screen bg-[#0B0B0B] p-8 text-white">

      <AccountHeader
        onAddClick={() => {
          setEditingAccount(null);
          setOpenForm(true);
        }}
      />

      <div className="mt-8">
        <AccountSummary
          totalAccounts={accounts.length}
          totalBalance={totalBalance}
          bankBalance={bankBalance}
          cashBalance={cashBalance}
        />
      </div>

      <div className="mt-8">
        <AccountFilters
          search={search}
          setSearch={setSearch}
        />
      </div>

      <div className="mt-8">
        <AccountTable
          accounts={filteredAccounts}
          onEdit={handleEditAccount}
          onDelete={handleDeleteAccount}
        />
      </div>

      {openForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">

          <div className="w-full max-w-2xl rounded-2xl bg-[#151515] p-8">

            <div className="mb-6 flex items-center justify-between">

              <h2 className="text-2xl font-bold text-yellow-500">
                {editingAccount
                  ? "Edit Account"
                  : "Add Account"}
              </h2>

              <button
                onClick={handleClose}
                className="rounded-lg bg-red-600 px-4 py-2 hover:bg-red-700"
              >
                Close
              </button>

            </div>

            <AccountForm
              initialData={editingAccount}
              onSave={handleSaveAccount}
            />

          </div>

        </div>
      )}

    </div>
  );
}
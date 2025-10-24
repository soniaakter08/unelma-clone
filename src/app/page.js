"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function HomePage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await supabase.from("users").select("*");
      if (error) console.error("Error fetching users:", error);
      else setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Users</h1>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul className="space-y-2">
          {users.map((u) => (
            <li key={u.id} className="border p-4 rounded-md">
              <h2 className="text-lg font-semibold">{u.name}</h2>
              <p>{u.email}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

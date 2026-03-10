import { useMutation } from "@tanstack/react-query";
import { api } from "@shared/routes";
import type { ContactMessageInput } from "@shared/routes";

export function useCreateContactMessage() {
  return useMutation({
    mutationFn: async (data: ContactMessageInput) => {
      // Run runtime validation before sending
      const validated = api.contact.create.input.parse(data);
      
      const res = await fetch(api.contact.create.path, {
        method: api.contact.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        let errorMessage = "Failed to send message";
        try {
          const errorData = await res.json();
          errorMessage = errorData.message || errorMessage;
        } catch {
          // Ignore parsing errors for non-JSON responses
        }
        throw new Error(errorMessage);
      }

      return res.json();
    },
  });
}

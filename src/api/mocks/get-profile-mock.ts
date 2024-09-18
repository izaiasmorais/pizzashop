import { http, HttpResponse } from "msw";
import type { GetProfileResponse } from "../get-profile";

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  "/me",
  () => {
    return HttpResponse.json({
      id: "customer-user-id",
      name: "John Doe",
      email: "johbdoe@example.com",
      phone: "324234234",
      role: "manager",
      createAt: new Date(),
      updateAt: null,
    });
  },
);

import { redirect } from "react-router";
import { deleteContact } from "../data";

interface ActionArgs {
  params: { contactId: string };
}

export async function action({ params }: ActionArgs) {
  await deleteContact(params.contactId);
  return redirect("/");
}

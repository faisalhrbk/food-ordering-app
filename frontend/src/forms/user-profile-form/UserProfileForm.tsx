import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form } from "@/components/ui/form";
const formSchema = z.object({
	email: z.string().optional(),
	name: z.string().min(1, "name is required"),
	addressLine1: z.string().min(1, "address is required"),
	city: z.string().min(1, "city is required"),
	country: z.string().optional(),
});

type UserFormData = z.infer<typeof formSchema>;

type UserProfileFormProps = {
	onSave: (userProfileDate: UserFormData) => void;
	isLoading: boolean;
};

const UserProfileForm = ({ onSave, isLoading }: UserProfileFormProps) => {
	const form = useForm<UserFormData>({
		resolver: zodResolver(formSchema),
	});
	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSave)}
				className="space-y-4 bg-gray-50 rounded-lg md:p-10"
			>
<div>
    <h2 className="text-2xl font-bold">User Profile Form</h2>
</div>

            </form>
		</Form>
	);
};

export default UserProfileForm;

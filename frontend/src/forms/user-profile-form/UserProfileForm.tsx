import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
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
					<FormDescription>
						view and change your profile information
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input {...field} disabled className="bg-white" />
									</FormControl>
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Name</FormLabel>
									<FormControl>
										<Input {...field} disabled className="bg-white" />
									</FormControl>
								</FormItem>
							)}
						/>
						<div className="flex flex-col md:flex-row gap-4">
							<FormField
								control={form.control}
								name="addressLine1"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Address Line 1</FormLabel>
										<FormControl>
											<Input {...field} disabled className="bg-white" />
										</FormControl>
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="city"
								render={({ field }) => (
									<FormItem>
										<FormLabel>city</FormLabel>
										<FormControl>
											<Input {...field} disabled className="bg-white" />
										</FormControl>
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="country"
								render={({ field }) => (
									<FormItem>
										<FormLabel>country</FormLabel>
										<FormControl>
											<Input {...field} disabled className="bg-white" />
										</FormControl>
									</FormItem>
								)}
							/>
						</div>
					</FormDescription>
				</div>
			</form>
		</Form>
	);
};

export default UserProfileForm;

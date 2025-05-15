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
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";
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
				className="space-y-6 bg-gray-50 rounded-lg md:p-10 shadow-md mx-5 px-4"
			>
				<div className="space-y-4 ">
					<h2 className="text-2xl font-bold text-orange-600 text-center pt-3 ">
						User Profile
					</h2>
					<FormDescription className="text-gray-600 mb-6 text-center">
						View and change your profile information
					</FormDescription>

					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem className="flex-1">
								<FormLabel className="text-gray-700">Email</FormLabel>
								<FormControl>
									<Input
										{...field}
										disabled
										className="bg-white p-2 border-gray-300 focus:border-orange-500 focus:ring focus:ring-orange-200 transition duration-200  "
									/>
								</FormControl>
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem className="flex-1">
								<FormLabel className="text-gray-700">Name</FormLabel>
								<FormControl>
									<Input
										{...field}
										className="bg-white p-2 border-gray-300 focus:border-orange-500 focus:ring focus:ring-orange-200 transition duration-200"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<div className="flex flex-col md:flex-row gap-4 mt-4">
						<FormField
							control={form.control}
							name="addressLine1"
							render={({ field }) => (
								<FormItem className="flex-1">
									<FormLabel className="text-gray-700">
										Address Line 1
									</FormLabel>
									<FormControl>
										<Input
											{...field}
											className="bg-white p-2 border-gray-300 focus:border-orange-500 focus:ring focus:ring-orange-200 transition duration-200 "
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="city"
							render={({ field }) => (
								<FormItem className="flex-1">
									<FormLabel className="text-gray-700">City</FormLabel>
									<FormControl>
										<Input
											{...field}
											className="bg-white p-2 border-gray-300 focus:border-orange-500 focus:ring focus:ring-orange-200 transition duration-200"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="country"
							render={({ field }) => (
								<FormItem className="flex-1">
									<FormLabel className="text-gray-700">Country</FormLabel>
									<FormControl>
										<Input
											{...field}
											className="bg-white p-2 border-gray-300 focus:border-orange-500 focus:ring focus:ring-orange-200 transition duration-200"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
				</div>
				<div className="p-4 pl-0 ">
					{isLoading ? (
						<LoadingButton />
					) : (
						<Button
							type="submit"
							className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded transition duration-200"
						>
							Save Changes
						</Button>
					)}
				</div>
			</form>
		</Form>
	);
};

export default UserProfileForm;

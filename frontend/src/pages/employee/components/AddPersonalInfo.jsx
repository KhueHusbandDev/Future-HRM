import { Button, Group, TextInput, NativeSelect } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';

import { useForm } from '@mantine/form';

function AddPersonalInfo() {
  const form = useForm({
    initialValues: {
      firstName: '',
      lastName: '',
      mobileNumber: '',
      email: '',
      dateOfBirth: '',
      maritalStatus: '',
      gender: '',
      nationality: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Group direction="columns" spacing="md" grow>
        <Group grow>
          <TextInput
            withAsterisk
            label="First Name"
            placeholder="First Name"
            {...form.getInputProps('firstName')}
          />
          <TextInput
            withAsterisk
            label="Last Name"
            placeholder="Last Name"
            {...form.getInputProps('lastName')}
          />
        </Group>

        <Group grow>
          <TextInput
            withAsterisk
            label="Mobile Number"
            placeholder="Mobile Number"
            {...form.getInputProps('mobileNumber')}
          />
          <TextInput
            withAsterisk
            label="Email"
            placeholder="your@email.com"
            {...form.getInputProps('email')}
          />
        </Group>

        <Group grow>
          <DatePickerInput
            withAsterisk
            label="Date of Birth"
            placeholder="Date of Birth"
            
            {...form.getInputProps('dateOfBirth')}
          />
          <NativeSelect
            withAsterisk
            label="Marital Status"
            data={['Single', 'Married', 'Divorced', 'Widowed']}
            placeholder="Marital Status"
            {...form.getInputProps('maritalStatus')}
          />
        </Group>

        <Group grow>
          <NativeSelect
            withAsterisk
            label="Gender"
            data={['Male', 'Female', 'Other']}
            placeholder="Gender"
            {...form.getInputProps('gender')}
          />
          <TextInput
            withAsterisk
            label="Nationality"
            placeholder="Nationality"
            {...form.getInputProps('nationality')}
          />
        </Group>

        <TextInput
          withAsterisk
          label="Address"
          placeholder="Address"
          {...form.getInputProps('address')}
        />

        <Group grow>
          <TextInput
            withAsterisk
            label="City"
            placeholder="City"
            {...form.getInputProps('city')}
          />
          <TextInput
            withAsterisk
            label="State"
            placeholder="State"
            {...form.getInputProps('state')}
          />
          <TextInput
            withAsterisk
            label="ZIP Code"
            placeholder="ZIP Code"
            {...form.getInputProps('zipCode')}
          />
        </Group>
      </Group>

      <Group position="right" mt="md">
        <Button type="submit">Next</Button>
        <Button type="button" variant="outline">Cancel</Button>
      </Group>
    </form>
  );
}

export default AddPersonalInfo;

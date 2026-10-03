<template>
    <div>
        <h2>Register</h2>
        <input type="email" name="email" v-model="email" placeholder="Email"  />
        <br />
        <input type="password" name="password" v-model="password" placeholder="Password" />
        <br />
        <button type="submit" @click="register">Register</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import AuthService from '../services/authenticationService'

const email = ref('')
const password = ref('')

// const register = async () => {
//     console.log('Registering with email:', email.value, 'and password:', password.value)
//     try {
//         await AuthService.register({email: email.value, password: password.value})
//         console.log('Registration successful')
//     } catch (error) {
//         console.error('Registration failed:', error)
//     }
// }
const register = async () => {
    console.log('1. Register function called')

    console.log(
        '2. Sending:',
        email.value,
        password.value
    )

    try {
        console.log('3. About to call AuthService')

        const response = await AuthService.register({
            email: email.value,
            password: password.value
        })

        console.log('4. AuthService finished')
        console.log('5. Response:', response.data)

        console.log('6. Registration successful')

    } catch (error) {
        console.error('7. Registration failed')
        console.error(error)
    }
}
</script>

<style scoped>
</style>
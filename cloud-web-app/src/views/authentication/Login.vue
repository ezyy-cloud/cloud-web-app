<template>
  <div style="display: flex; justify-content: center; align-items: center;">
    <v-card class="auth-card pa-4 pt-7 card" max-width="448">
      <v-card-text class="pt-2">
        <h5 class="text-h5 font-weight-semibold mb-1">Sign in</h5>
        <p class="mb-0">
          Please sign-in to your account and access your suites
        </p>
      </v-card-text>

      <v-card-text>
        <VForm @submit.prevent="() => {}">
          <v-row>
            <!-- email -->
            <v-col cols="12">
              <v-text-field
                variant="outlined"
                v-model="form.email"
                label="Email"
                type="email"
              />
            </v-col>

            <!-- password -->
            <v-col cols="12">
              <v-text-field
                v-model="form.password"
                label="Password"
                variant="outlined"
                :type="isPasswordVisible ? 'text' : 'password'"
                :append-inner-icon="
                  isPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'
                "
                @click:append-inner="isPasswordVisible = !isPasswordVisible"
              />

              <!-- remember me checkbox -->
              <div
                class="d-flex align-center justify-space-between flex-wrap mt-1 mb-4"
              >
                <v-checkbox
                  v-model="form.remember"
                  label="Remember me"
                  hide-details
                />

                <a
                  class=""
                  href="javascript:void(0)"
                  style="text-decoration: none; color: primary;"
                >
                  Forgot Password?
                </a>
              </div>

              <!-- login button -->
              <v-btn
                block
                rounded="pill"
                type="submit"
                color="primary"
                class="text-white"
              >
                Login
              </v-btn>
            </v-col>

            <!-- create account -->
            <v-col cols="12" class="text-center text-base">
              <span>New on our platform?</span>
              <RouterLink
                class="text-primary ms-2"
                to="/authentication/register"
                style="text-decoration: none; color: primary;"
              >
                Create an account
              </RouterLink>
            </v-col>

            <v-col cols="12" class="d-flex align-center">
              <v-divider />
              <span class="mx-4">or</span>
              <v-divider />
            </v-col>

            <!-- auth providers -->
            <v-col cols="12" class="text-center">
              <AuthProvider />
            </v-col>
          </v-row>
        </VForm>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import AuthProvider from "@/components/AuthProvider.vue";

const form = ref({
  email: "",
  password: "",
  remember: false
});

const isPasswordVisible = ref(false);
</script>

<style lang="scss" scoped>
.card {
}
</style>

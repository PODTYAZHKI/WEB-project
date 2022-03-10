<template>
  <!-- TODO В мобильной ориентации лагает оверлей -->

  <el-form
    ref="form"
    :model="form"
    :rules="rules"
    label-position="top"
    hide-required-asterisk
    status-icon
  >
    <el-form-item label="Введите название встречи" prop="title">
      <el-input v-model="form.title" placeholder="Название"></el-input>
    </el-form-item>
    <el-form-item label="Выберите платформу" prop="platform">
      <el-select
        v-model="form.platform"
        placeholder="Платформа"
        style="width: 100%;"
      >
        <el-option v-for="(option, i) in platforms" :value="option" :label="option | platformName" :key="i">
          <span style="float: left">{{ option | platformName }}</span>
          <el-tooltip
            class="item"
            :content="option | platformTip"
            placement="top"
          >
            <i style="float: right;" class="mdi mdi-help-circle-outline" />
          </el-tooltip>
        </el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="Выберите дату">
      <el-date-picker
        v-model="date"
        type="date"
        placeholder="Дата"
        format="dd.MM.yyyy"
        :clearable="false"
        style="width: 100%;"
        :picker-options="{
          disabledDate,
          firstDayOfWeek: 1
        }"
      />
    </el-form-item>
    <el-form-item label="Выберите время начала и окончания" prop="time">
      <div class="datetime-picker-form-item">
        <el-time-select
          v-model="start"
          :picker-options="{
            start: '00:00',
            end: '23:50',
            step: '00:05'
          }"
          placeholder="Начало"
          :clearable="false"
        />
        <el-time-select
          v-model="end"
          :picker-options="{
            start: '00:05',
            end: '23:55',
            step: '00:05',
            minTime: start
          }"
          placeholder="Окончание"
          :clearable="false"
        />
      </div>
    </el-form-item>
    <el-form-item label="Добавьте участников">
      <el-select
        v-model="form.participants"
        multiple
        filterable
        remote
        placeholder="Участники (опционально)"
        :remote-method="fetchUsers"
        :loading="loading"
        style="width: 100%;"
      >
        <el-option v-for="item in users" :key="item.email" :value="item.email">
          <span class="user">
            <figure class="image is-32x32 mr-2" v-if="item.photo">
              <img class="is-rounded user-avatar" :src="item.photo" />
            </figure>
            <el-avatar class="mr-2" :size="32" v-else>
              {{ item.name[0] }}
            </el-avatar>
            <div class="info">
              <span class="name">
                {{ item.name }}
              </span>
              <span class="email">
                {{ item.email }}
              </span>
            </div>
          </span>
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="Введите комнату" prop="room">
      <el-input
        v-model="form.room"
        placeholder="Комната (опционально)"
      ></el-input>
    </el-form-item>
    <el-form-item label="Введите описание">
      <el-input
        type="textarea"
        :rows="2"
        placeholder="Описание (опционально)"
        v-model="form.description"
      >
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-button
        class="submit-button"
        type="text"
        @click="onSubmit"
        :loading="submitLoading"
      >
        Подтвердить</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {
      date: null,
      start: "",
      end: "",
      form: {},
      platforms: [],
      users: [],
      loading: false,
      submitLoading: false,
      rules: {
        title: [
          {
            validator: this.validateTitle,
            trigger: "blur"
          }
        ],
        platform: [
          {
            required: true,
            message: "Пожалуйста, выберите платформу",
            trigger: "change"
          }
        ],
        time: [
          {
            validator: this.validateTime
          }
        ],
        room: [
          {
            validator: this.validateRoom,
            trigger: "blur"
          }
        ]
      }
    };
  },
  created() {
    this.initialize(this.item);
  },
  async fetch() {
    this.platforms = await this.$api.preferences.listPlatforms();
  },
  watch: {
    item(value) {
      this.initialize(value);
    }
  },
  methods: {
    initialize(value) {
      if (value) {
        this.form = { ...value };
        this.date = this.$moment(this.form.date, "DD.MM.yyyy");
        this.start = this.form.start_time;
        this.end = this.form.end_time;
      } else {
        this.form = {
          title: null,
          platform: null,
          start_time: null,
          end_time: null,
          participants: [],
          room: null,
          description: null
        };
        this.date = this.$moment();
        let start = this.$moment()
          .startOf("minute")
          .add(5 - (this.date.minute() % 5), "m");
        if (start.hour() === 23 && start.minute() > 50) {
          // if start > 23:50 then switch to the next day
          start.hour(0).minute(0);
          this.date.add(1, "d");
        }
        let end = this.$moment(start).add(5, "m");
        this.start = start.format("HH:mm");
        this.end = end.format("HH:mm");
        this.$refs.form?.clearValidate();
      }
    },
    disabledDate(date) {
      return date <= this.$moment().subtract(1, "days");
    },
    validateTitle(rule, value, callback) {
      if (!value || value === "") {
        return callback(new Error("Пожалуйста, введите название встречи"));
      }
      if (value.length < 6) {
        return callback(new Error("Название должно содержать от 6 символов"));
      }
      if (!/^[a-zA-Zа-яА-Я].*$/.test(value)) {
        return callback(new Error("Название должно начинаться с буквы"));
      }
      callback();
    },
    validateRoom(rule, value, callback) {
      if (value && value !== "") {
        if (value.length < 6) {
          return callback(new Error("Комната должна содержать от 6 символов"));
        }
        if (!/^[A-Za-z][0-9A-Za-z-]*$/.test(value)) {
          return callback(
            new Error(
              "Комната должна начинаться с буквы, а также может содержать только цифры, буквы и символ дефиса"
            )
          );
        }
      }
      callback();
    },
    validateTime(rule, value, callback) {
      const start = this.start;
      const end = this.end;
      if (!start) {
        return callback(new Error("Пожалуйста, выберите время начала"));
      }
      if (!end) {
        return callback(new Error("Пожалуйста, выберите время окончания"));
      }

      const [startHour, startMinute] = start.split(":");
      const [endHour, endMinute] = end.split(":");

      if (!this.$moment(this.date).isAfter(this.$moment(), "day")) {
        // Если выбранная дата РАВНА текущей
        const now = this.$moment();
        if (
          this.$moment(this.date)
            .hour(startHour)
            .minute(startMinute) < now // Если выбранное время раньше текущего
        ) {
          return callback(
            new Error(
              `Пожалуйста, выберите время начала от ${now.format("HH:mm")}`
            )
          );
        }
      }

      if (
        parseInt(endHour) < parseInt(startHour) ||
        (parseInt(endHour) === parseInt(startHour) &&
          parseInt(endMinute) <= parseInt(startMinute)) // Если время окончания раньше времени начала
      ) {
        return callback(
          new Error(`Пожалуйста, выберите время окончания после начала`)
        );
      }
      callback();
    },
    async onSubmit() {
      this.$refs["form"].validate(async valid => {
        if (valid) {
          this.submitLoading = true;
          const [startHour, startMinute] = this.start.split(":");
          this.form.start_time = this.$moment(this.date)
            .hour(startHour)
            .minute(startMinute)
            .format("yyyy-MM-DD HH:mm");
          const [endHour, endMinute] = this.end.split(":");
          this.form.end_time = this.$moment(this.date)
            .hour(endHour)
            .minute(endMinute)
            .format("yyyy-MM-DD HH:mm");
          for (let key in this.form) {
            if (this.form[key] === "") {
              this.form[key] = null;
            }
          }
          try {
            if (!this.form.id) {
              await this.$api.customs.create(this.form);
            } else {
              await this.$api.customs.update(this.form.id, this.form);
            }
            this.$emit("submited");
          } catch {
            this.$message.error("Не удалось создать новую встречу");
          } finally {
            this.submitLoading = false;
          }
        } else {
          return false;
        }
      });
    },
    async fetchUsers(query) {
      if (query !== "" && query.length > 2) {
        try {
          this.loading = true;
          this.users = (await this.$api.users.list({ query })).data;
          this.users = this.users.filter(
            x => !this.form.participants.includes(x.email)
          );
        } catch {
          this.users = [];
        } finally {
          this.loading = false;
        }
      } else {
        this.users = [];
      }
    }
  }
};
</script>

<style scoped lang="scss">
::v-deep .el-form-item__label {
  font-size: 1rem;
  line-height: 1.25rem;
  color: #3f4d58;
}

.datetime-picker-form-item {
  width: 100%;
  display: flex;
  justify-items: stretch;

  > * {
    width: 100%;
    text-align: center !important;

    &:not(:first-child) {
      margin-left: 20px;
    }
  }
}

.user {
  display: flex;
  flex-direction: row;
  align-items: center;

  .info {
    display: flex;
    flex-direction: column;

    .name {
      font-size: 1rem;
      line-height: 1.2rem;
      color: #3f4d58;
    }

    .email {
      font-size: 0.7rem;
      line-height: 0.8rem;
      color: #8c949b;
    }
  }
}

.submit-button {
  float: right;
  margin-right: 10px;
  color: #fff;
  background: #2673f0;
  padding: 16px 40px;
  border-radius: 12px;
}
</style>

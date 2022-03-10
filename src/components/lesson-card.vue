<template>
  <el-card
    class="lesson-card-wrapper"
    shadow="hover"
    :body-style="{ padding: '20px 25px 15px 25px' }"
  >
    <div class="content">
      <div class="property-title">
        <span>{{ item.name }}</span>
        <div class="actions" v-if="actionsAvaliable">
          <el-button type="text" size="mini" @click="onEdit">
            <i class="mdi mdi-square-edit-outline" />
          </el-button>
          <el-button type="text" size="mini" @click="onDelete">
            <i class="mdi mdi-delete-outline danger" />
          </el-button>
        </div>
      </div>

      <div class="property">
        <i class="mdi mdi-map-marker-radius-outline has-text-grey" />
        <span>{{
          `${item.auditorium} (${item.building})` || "-"
        }}</span>
      </div>
      <div class="property">
        <i class="mdi mdi-account-group-outline has-text-grey" />
        <span>{{ item.group || "-" }}</span>
      </div>
      <div class="property">
        <i class="mdi mdi-account-outline has-text-grey" />
        <span>{{ item.lecturer || "-" }}</span>
      </div>
      <div class="property">
        <i class="mdi mdi-email-outline has-text-grey" />
        <span>{{ item.lecturerEmail || "-" }}</span>
      </div>
      <div class="property">
        <i class="mdi mdi-calendar" />
        <span>{{ item.date || "-" }}</span>
      </div>
      <div class="property">
        <i class="mdi mdi-clock-time-twelve-outline" />
        <span>{{
          `${item.startTime} - ${item.endTime}` || "-"
        }}</span>
      </div>
      <div class="property">
        <i class="mdi mdi-link" />
        <a v-if="item.url1" @click="goToLesson(item.url1)">{{
          item.url1
        }}</a>
        <span v-else>{{ "-" }}</span>
      </div>
    </div>
    <!-- <div class="property" v-if="props.includes('room')">
        <i class="mdi mdi-map-marker-radius-outline has-text-grey" />
        <span>{{ item.room || "-" }}</span>
      </div>
      <div class="property" v-if="props.includes('teacher_name')">
        <i class="mdi mdi-account-outline has-text-grey" />
        <span>{{ item.teacher_name || "-" }}</span>
      </div>
      <div class="property" v-if="props.includes('teacher_email')">
        <i class="mdi mdi-email-outline has-text-grey" />
        <span>{{ item.teacher_email || "-" }}</span>
      </div>
      <div class="property" v-if="props.includes('participants')">
        <i class="mdi mdi-account-group-outline has-text-grey" />
        <span
          class="is-flex is-align-items-center"
          v-if="item.participants && item.participants.length"
        >
          <el-tag size="small" type="info">
            {{ item.participants[0] }}
          </el-tag>
          <el-popover
            v-if="item.participants.length > 1"
            placement="right"
            width="200"
            trigger="hover"
          >
            <el-tag size="mini" type="info" class="mt-1" v-for="participant, i in item.participants.slice(1)" :key="i">
              {{ participant }}
            </el-tag>
            <el-tag slot="reference" size="small" type="info" class="ml-1 is-clickable">
              +{{ item.participants.length - 1 }}
            </el-tag>
          </el-popover>
        </span>
        <span v-else>-</span>
      </div>
      <div class="property" v-if="props.includes('type')">
        <i class="mdi mdi-school-outline has-text-grey" />
        <span>{{ item.type || "-" }}</span>
      </div>
      <div class="property" v-if="props.includes('platform')">
        <i class="mdi mdi-video-outline has-text-grey" />
        <span>{{ item.platform | platformName }}</span>
      </div>
      <div class="property" v-if="props.includes('date')">
        <i class="mdi mdi-calendar has-text-grey" />
        <span>{{ item.date || "-" }}</span>
      </div>

      <div
        class="is-flex is-flex-direction-row is-align-items-center mt-2  is-justify-content-space-between"
      >
        <span class="time">
          <span v-if="props.includes('order')">
            {{ item.order || "-" }} пара <i class="mdi mdi-circle-medium" />
          </span>
          <span v-if="props.includes('time')"
            >{{ item.start_time || "-" }} - {{ item.end_time || "-" }}</span
          >
        </span>
        <el-button
          type="text"
          @click="goTo"
          :disabled="!$store.state.loggedIn || disabled"
        >
          Перейти
          <i class="mdi mdi-open-in-new" />
        </el-button>
      </div>
    </div> -->
  </el-card>
</template>

<script>
export default {
  props: ["item", "props"],
  data() {
    return {
      now: null,
      interval: null,
    };
  },
  // computed: {
  //   disabled() {
  //     const [startHour, startMinute] = this.item.start_time.split(":");
  //     const [endHour, endMinute] = this.item.end_time.split(":");
  //     const start = this.$moment()
  //       .hour(startHour)
  //       .minute(startMinute)
  //       .add(-10, "m");
  //     const end = this.$moment()
  //       .hour(endHour)
  //       .minute(endMinute);
  //     return (
  //       this.item.date !== this.$moment().format("DD.MM.yyyy") ||
  //       this.isAfter(start, this.now) ||
  //       this.isAfter(this.now, end)
  //     );
  //   },
  //   actionsAvaliable() {
  //     const [startHour, startMinute] = this.item.start_time.split(":");
  //     const start = this.$moment()
  //       .hour(startHour)
  //       .minute(startMinute)
  //       .add(-10, "m");
  //     return (
  //       this.item.type === "Встреча" &&
  //       this.accountFromEmail(this.item.teacher_email) ===
  //         this.accountFromEmail(this.$store.state.user.email) &&
  //       (this.item.date !== this.$moment().format("DD.MM.yyyy") ||
  //         this.isAfter(start, this.now))
  //     );
  //   }
  // },
  created() {
    this.updateNow();
    if (process.client) {
      let self = this;
      const toNextMinute =
        self.$moment().add(1, "m").startOf("minute").diff(self.$moment(), "s") +
        1;
      setTimeout(function () {
        self.updateNow();
        self.interval = setInterval(function () {
          self.updateNow();
        }, 60 * 1000);
      }, toNextMinute * 1000);
    }
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  methods: {
    accountFromEmail(email) {
      return email.split("@")[0];
    },
    updateNow() {
      this.now = this.$moment();
    },
    goTo() {
      window.location.href = `/${this.item.room}`;
    },
    isAfter(time1, time2) {
      return (
        time1.hour() > time2.hour() ||
        (time1.hour() === time2.hour() && time1.minute() > time2.minute())
      );
    },
    onEdit() {
      this.$emit("edit", this.item);
    },
    onDelete() {
      this.$emit("delete", this.item.id);
    },
  },
};
</script>

<style scoped lang="scss">
.lesson-card-wrapper {
  border-radius: 12px;
  width: 100%;
  height: 100%;

  ::v-deep .el-card__body {
    width: 100%;
    height: 100%;
  }

  .content {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .time {
    font-size: 1rem;
    line-height: 1.25rem;
    color: #8c949b;
  }

  .property {
    display: flex;
    align-items: center;
    padding: 6px 0;
    color: #3f4d58;
    line-height: 1.25rem;

    i {
      padding-right: 12px;
    }

    span {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &-title {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      flex-grow: 1;
      margin-bottom: 16px;

      span {
        display: block;
        width: 80%;
        word-wrap: break-word;
        font-weight: 600;
        font-size: 1.2rem;
        line-height: 1.5rem;
        color: #3f4d58;
      }

      .actions {
        display: flex;
        align-items: center;
      }

      i {
        padding: 0;
        font-size: 1.2rem;

        &.danger {
          color: #ff5b5b;

          &:hover {
            color: #fd7575;
          }
        }
      }
    }
  }
}
</style>

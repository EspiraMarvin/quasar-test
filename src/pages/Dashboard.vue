<template>
  <q-page class="q-pa-md dashboard">
    <div class="row col-xs-12">
      <div class="col-md-6 col-sm-7 col-xs-12 q-pa-sm q-ma-md">
        Dashboard 1
        <q-card class="my-card">
          <q-card-section class="col-12 q-pa-md">
              <div class="row">
                <div class="col-sm-8 col-xs-12">8 tasks completed out of 10</div>
                <div class="col-sm-4 col-xs-12">
                  Show: <span style="color: #109CF1">This week</span>
                  <q-expansion-item dense dense-toggle label="" style="margin-top: -28px">
                    <q-item dense exact clickable><span class="text-caption">This Month</span></q-item>
                    <q-item dense exact clickable><span class="text-caption">This Year</span></q-item>
                  </q-expansion-item>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12 col-xs-10">
                  <q-linear-progress :value="progress" color="secondary" class="q-mt-sm" />
                </div>
              </div>
              <div class="text-overline q-mt-sm q-mb-xs">23 December, Sunday</div>
              <div class="q-ma-sm">
                <ul class="flex-container-week-days space-between">
                  <li class="flex-item">Sun</li>
                  <li class="flex-item text-primary">Mon</li>
                  <li class="flex-item">Tue</li>
                  <li class="flex-item">Wed</li>
                  <li class="flex-item">Thu</li>
                  <li class="flex-item">Fri</li>
                  <li class="flex-item">Sat</li>
                </ul>
              </div>
              <div class="q-ma-sm q-mt-xs">
                <ul class="flex-container-week-dates space-between">
                  <li class="flex-item bg-primary text-white">23</li>
                  <li class="flex-item text-primary">24</li>
                  <li class="flex-item">25</li>
                  <li class="flex-item">26</li>
                  <li class="flex-item">27</li>
                  <li class="flex-item">28</li>
                  <li class="flex-item">29</li>
                </ul>
              </div>
          </q-card-section>


          <q-separator />

          <q-card-section>
            <q-card-section class="q-pa-sm">
              <q-card class="my-card">
                <q-card-section class="text-black">
                  <div class="text-subtitle1 text-weight-medium">Send benefit review by Sunday</div>
                  <div class="text-subtitle2 text-weight-light text-grey">Due date: <span class="text-weight-light text-black">December 23, 2018</span></div>
                </q-card-section>
                <q-card-section class="q-mb-sm">
                  <div class="float-left">
                    <q-item style="margin-top: -10px">
                      <q-item-section avatar>
                        <q-avatar
                          size="26px"
                        >
                          <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                        </q-avatar>
                      </q-item-section>
                      <span class="text-weight-regular text-grey-14 card-text-caption">George Fields</span>
                    </q-item>

                  </div>
                  <div class="float-right">
                    <q-btn size="md" class="bg-secondary text-white text-capitalize" flat>Completed</q-btn>
                  </div>
                </q-card-section>

                <q-card-actions align=""></q-card-actions>
              </q-card>

<!--              Second  card --->

              <q-card class="my-card q-mt-lg">
                <q-card-section class="text-black">
                  <div class="text-subtitle1 text-weight-medium">Invite to office meet-up</div>
                  <div class="text-subtitle2 text-weight-light text-grey">Due date: <span class="text-weight-light text-black">December 23, 2018</span></div>
                </q-card-section>
                <q-card-section class="q-mb-sm">
                  <div class="float-left">
                    <q-item style="margin-top: -10px">
                      <q-item-section avatar>
                        <q-avatar
                          size="26px"
                        >
                          <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                        </q-avatar>
                      </q-item-section>
                      <span class="text-weight-regular text-grey-14 card-text-caption">Rebbeca Moore</span>
                    </q-item>

                  </div>
                  <div class="float-right">
                    <q-icon name="edit" class="q-mr-md" color="accent" size="sm" />
                    <q-icon name="delete" class="q-mr-md" color="accent" size="sm" />
                    <q-btn size="md" class="bg-negative text-white text-capitalize" flat>Ended</q-btn>
                  </div>
                </q-card-section>

                <q-card-actions align=""></q-card-actions>
              </q-card>

<!--              third card-->

              <q-card class="my-card q-mt-lg">
                <q-card-section class="text-black">
                  <div class="text-subtitle1 text-weight-medium">Invite to office meet-up</div>
                  <div class="text-subtitle2 text-weight-light text-grey">Due date: <span class="text-weight-light text-black">December 23, 2018</span></div>
                </q-card-section>
                <q-card-section class="q-mb-sm">
                  <div class="float-left">
                    <q-item style="margin-top: -10px">
                      <q-item-section avatar>
                        <q-avatar
                          size="26px"
                        >
                          <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                        </q-avatar>
                      </q-item-section>
                      <span class="text-weight-regular text-grey-14 card-text-caption">Lindsey Stroud</span>
                    </q-item>

                  </div>
                  <div class="float-right">
                    <q-btn size="md" class="bg-secondary text-white text-capitalize" flat>Completed</q-btn>
                  </div>
                </q-card-section>

                <q-card-actions align=""></q-card-actions>
              </q-card>


            </q-card-section>
          </q-card-section>

          <q-card-actions>
          </q-card-actions>
        </q-card>
      </div>

<!--      right panel with deals and tasks-->

      <div class="col-sm-4 col-xs-12 q-pa-sm q-ma-md">
        Dashboard 2
<!--        deals-->
        <q-card class="my-card q-mb-xl">
          <q-card-section class="col-12 q-pa-md">
            <div class="row">
              <div class="col-sm-8 col-xs-12">Deals</div>
              <div class="col-sm-4 col-xs-12">
                Show: <span style="color: #109CF1">Monthly</span>
                <q-expansion-item dense dense-toggle label="" style="margin-top: -28px">
                  <q-item dense exact clickable><span class="text-caption">This Month</span></q-item>
                  <q-item dense exact clickable><span class="text-caption">This Year</span></q-item>
                </q-expansion-item>
              </div>
            </div>
          </q-card-section>
          <q-separator />


          <q-list>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="primary" name="local_bar" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Bar XYZ</q-item-label>
                <q-item-label caption>Have a drink.</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="red" name="local_gas_station" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Gas Station</q-item-label>
                <q-item-label caption>Fill your gas tank.</q-item-label>
              </q-item-section>
            </q-item>

          </q-list>
        </q-card>


<!--       Tasks pie chart -->

        <q-card class="my-card">
          <q-card-section class="col-12 q-pa-md">
            <div class="row">
              <div class="col-sm-8 col-xs-12">Tasks</div>
              <div class="col-sm-4 col-xs-12">
                Show: <span style="color: #109CF1">Monthly</span>
                <q-expansion-item dense dense-toggle label="" style="margin-top: -28px">
                  <q-item dense exact clickable><span class="text-caption">This Month</span></q-item>
                  <q-item dense exact clickable><span class="text-caption">This Year</span></q-item>
                </q-expansion-item>
              </div>
            </div>
          </q-card-section>
          <q-separator />


          <q-list>
            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="primary" name="local_bar" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Bar XYZ</q-item-label>
                <q-item-label caption>Have a drink.</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable>
              <q-item-section avatar>
                <q-icon color="red" name="local_gas_station" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Gas Station</q-item-label>
                <q-item-label caption>Fill your gas tank.</q-item-label>
              </q-item-section>
            </q-item>

          </q-list>
        </q-card>
      </div>

    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Dashboard',
  data (){
    return {
      progress: 0.8
    }
  }
}
</script>

<style scoped>
  .dashboard{
    background-color: #f5f6f8;
  }
  .flex-container-week-days {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
  }
  .flex-container-week-dates {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
  }

  .flex-container-week-dates li {
    border-radius: 50%;
    width: 20px;
    height: 20px
  }
  .space-between {
    justify-content: space-between;
  }
  .card-text-caption{
    margin-left: -20px;
    margin-top: 5px
  }

</style>
